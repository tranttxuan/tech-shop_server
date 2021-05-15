const slugify = require("slugify");
const Product = require("../models/Product");
const Sub = require("../models/Sub");

exports.createSub = (req, res) => {
    const { name, parent } = req.body;

    Sub.create({ name, parent, slug: slugify(name) })
        .then(sub => res.status(200).json(sub))
        .catch(error => res.status(400).json({ message: error.message }))
}

exports.listAllSub = (req, res) => {
    Sub.find({})
        .sort({ createdAt: -1 })
        .then(list => res.status(200).json(list))
        .catch(error => res.status(400).json({ message: error.message }))

}
exports.readSub = (req, res) => {
    Sub.findOne({ slug: req.params.slug })
        .then(sub => {
            Product.find({ subs: sub })
                .populate('category')
                .then(products => {
                    //category info and products in the same subcategory
                    res.status(200).json({ sub, products });
                })
                .catch(error => res.status(400).json({ message: error.message }))
        })
        .catch(error => res.status(400).json({ message: error.message }))
}

exports.updateSub = (req, res) => {
    const { name, parent } = req.body;
    Sub.findOneAndUpdate(
        { slug: req.params.slug },
        { name, parent, slug: slugify(name) },
        { new: true })
        .then(updatedCat => res.status(200).json(updatedCat))
        .catch(error => res.status(400).json({ message: error.message }))
}

exports.deleteSub = (req, res) => {
    Sub.findOneAndDelete({ slug: req.params.slug })
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json({ message: error.message }))
}