const User = require("../models/User");
const Cart = require("../models/Cart");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
    const { couponApplied } = req.body;
    // TODO: set a card up for future payments
    const customer = await stripe.customers.create();
    // find user 
    const user = await User.findOne({ email: req.user.email });
    // get user cart total 
    const { cartTotal, totalAfterDiscount } = await Cart.findOne({ orderedBy: user._id });
    let finalAmount = 0;

    if (couponApplied && totalAfterDiscount) {
        finalAmount = totalAfterDiscount * 100;
    } else {
        finalAmount = cartTotal * 100;
    }
    // create payment intent with order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: finalAmount,
        currency: 'eur',
        payment_method_types: ['card'],
        customer: customer.id,
    });

    res.status(200).json({
        clientSecret: paymentIntent.client_secret,
        cartTotal,
        totalAfterDiscount,
        payable: finalAmount/100,
    });
}