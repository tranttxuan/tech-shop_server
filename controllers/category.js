const Category = require("../models/Category");
const slugify = require("slugify");

exports.createCategory = (req, res) => {
    const { name } = req.body;
    console.log("create new", name)
    Category.create({ name, slug: slugify(name) })
        .then(category => res.status(200).json(category))
        .catch(error => res.status(400).json({ message: error }))
}

exports.listAllCategory = (req, res) => {
    Category.find({})
        .sort({ createdAt: -1 })
        .then(list => res.status(200).json(list))
        .catch(error => res.status(400).json({ message: error }))

}
exports.readCategory = (req, res) => {
    Category.findOne({ slug: req.params.slug })
        .then(category => res.status(200).json(category))
        .catch(error => res.status(400).json({ message: error }))
}

exports.updateCategory = (req, res) => {
    const { name } = req.body;
    Category.findOneAndUpdate(
        { slug: req.params.slug },
        { name, slug: slugify(name) },
        { new: true })
        .then(updatedCat => res.status(200).json(updatedCat))
        .catch(error => res.status(400).json({ message: error }))
}

exports.deleteCategory = (req, res) => {
    Category.findOneAndDelete({ slug: req.params.slug })
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json({ message: error }))
}