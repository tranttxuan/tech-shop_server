const User = require("../models/User");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const Coupon = require("../models/Coupon");
const Order = require("../models/Order");

exports.userCart = async (req, res) => {
    const { cart } = req.body;
    const products = [];
    const user = await User.findOne({ email: req.user.email });
    // check if cart with logged in user id has already existed 
    let cartExistByThisUser = Cart.findOne({ orderedBy: user._id });
    if (cartExistByThisUser) {
        await cartExistByThisUser.remove();
    };
    for (let i = 0; i < cart.length; i++) {
        let object = {};
        object.product = cart[i]._id;
        object.count = cart[i].count;
        object.color = cart[i].color;
        // get price for creating total
        let productFromDb = await Product.findById(cart[i]._id).select("price");
        object.price = productFromDb.price;
        products.push(object);
    }

    const cartTotal = [...cart].reduce((acc, product) => {
        return acc + product.price * product.count;
    }, 0);

    try {
        let newCart = await Cart.create({
            products,
            cartTotal,
            orderedBy: user._id
        });
        return res.status(200).json(newCart)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};

exports.getCart = (req, res) => {
    User.findOne({ email: req.user.email })
        .then(user => {
            Cart.findOne({ orderedBy: user._id })
                .populate('products.product', '_id title price')
                .then(cart => res.status(200).json(cart))
                .catch((error) => res.status(400).json({ message: error.message }));
        })
        .catch((error) => res.status(400).json({ message: error.message }));
};

exports.emptyCart = (req, res) => {
    User.findOne({ email: req.user.email })
        .then(user => {
            Cart.findOneAndDelete({ orderedBy: user._id })
                .then(response => res.status(200).json(response))
                .catch((error) => res.status(400).json({ message: error.message }));
        })
        .catch((error) => res.status(400).json({ message: error.message }));
};

exports.saveAddress = (req, res) => {
    User.findOneAndUpdate(
        { email: req.user.email },
        { address: req.body.address },
        { new: true })
        .then(response => res.status(200).json(response))
        .catch((error) => res.status(400).json({ message: error.message }))
};

exports.applyCouponToCart = (req, res) => {
    Coupon.findOne(req.body)
        .then(async (validCoupon) => {
            if (validCoupon === null) {
                return res.status(200).json({ err: 'Invalid coupon' })
            }
            const user = await User.findOne({ email: req.user.email });
            const { products, cartTotal } = await Cart.findOne({ orderedBy: user._id })
                .populate('products.product', '_id title price')


            const totalAfterDiscount = (cartTotal * (1 - validCoupon.discount / 100)).toFixed(2);

            Cart.findOneAndUpdate({ orderedBy: user._id }, { totalAfterDiscount }, { new: true })
                .then(response => res.status(200).json(response))
                .catch((error) => res.status(400).json({ message: error.message }))
        })
        .catch((error) => res.status(400).json({ message: error.message }))
}

exports.createOrder = async (req, res) => {
    const { paymentIntent } = req.body.stripeResponse;
    const user = await User.findOne({ email: req.user.email });
    const { products } = await Cart.findOne({ orderedBy: user._id });
    try {
        const newOrder = await Order.create({
            products,
            paymentIntent,
            orderedBy: user._id
        })
        console.log(newOrder)
        return res.status(200).json(newOrder)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}