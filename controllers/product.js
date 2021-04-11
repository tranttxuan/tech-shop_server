
const slugify = require("slugify");
const Product = require("../models/Product");

exports.create = (req, res) => {
    req.body.slug = slugify(req.body.title)
    Product.create(req.body)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(400).json({ message: err }))
}