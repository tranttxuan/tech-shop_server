const Coupon = require("../models/Coupon");

exports.create = (req, res) => {
    Coupon.create(req.body)
        .then((coupon) => res.status(200).json(coupon))
        .catch((err) => res.status(400).json({ message: err.message }));
};

exports.list = (req, res) => {
    Coupon.find({})
        .sort({ createdAt: -1 })
        .then((coupon) => res.status(200).json(coupon))
        .catch((err) => res.status(400).json({ message: err.message }));
};

exports.remove = (req, res) => {
    Coupon.findOneAndDelete(req.params.couponId)
        .then((coupon) => res.status(200).json(coupon))
        .catch((err) => res.status(400).json({ message: err.message }));
};