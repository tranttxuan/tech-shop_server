
const slugify = require("slugify");
const Product = require("../models/Product");

exports.create = (req, res) => {
    req.body.slug = slugify(req.body.title)
    Product.create(req.body)
        .then(product => res.status(200).json(product))
        .catch(err => {
            console.log(err.message)
            res.status(400).json({ message: err.message })
        })
}

exports.readAllProducts = (req, res) => {
    Product.find({})
        .populate("Sub")
        .then(prod => res.status(200).json(prod))
        .catch(error => res.status(400).json({ message: error.message }))

}