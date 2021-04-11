const slugify = require("slugify");
const Sub = require("../models/Sub");

exports.createSub = (req, res) => {
    const { name, parent } = req.body;

    Sub.create({ name,parent, slug: slugify(name) })
        .then(sub => res.status(200).json(sub))
        .catch(error => res.status(400).json({ message: error }))
}

exports.listAllSub = (req, res) => {
    Sub.find({})
        .sort({ createdAt: -1 })
        .then(list => res.status(200).json(list))
        .catch(error => res.status(400).json({ message: error }))

}
exports.readSub = (req, res) => {
    Sub.findOne({ slug: req.params.slug })
        .then(category => res.status(200).json(category))
        .catch(error => res.status(400).json({ message: error }))
}

exports.updateSub = (req, res) => {
    const { name, parent } = req.body;
    Sub.findOneAndUpdate(
        { slug: req.params.slug },
        { name, parent, slug: slugify(name) },
        { new: true })
        .then(updatedCat => res.status(200).json(updatedCat))
        .catch(error => res.status(400).json({ message: error }))
}

exports.deleteSub = (req, res) => {
    Sub.findOneAndDelete({ slug: req.params.slug })
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json({ message: error }))
}