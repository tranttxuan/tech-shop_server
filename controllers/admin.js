const User = require("../models/User");
const Order = require("../models/Order");

exports.orders = (req, res) => {
    Order.find({})
        .sort('-createdAt')
        .populate('products.product')
        .then(orders => res.status(200).json(orders))
        .catch((error) => res.status(400).json({ message: error.message }));
};

exports.orderStatus = (req, res) => {
    const { orderId, orderStatus } = req.body;
    Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true })
        .then(order => res.status(200).json(order))
        .catch((error) => res.status(400).json({ message: error.message }));
};