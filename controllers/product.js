const slugify = require("slugify");
const Product = require("../models/Product");

exports.create = (req, res) => {
  req.body.slug = slugify(req.body.title);
  Product.create(req.body)
    .then((product) => res.status(200).json(product))
    .catch((err) => {
      console.log(err.message);
      res.status(400).json({ message: err.message });
    });
};

exports.readAllProducts = (req, res) => {
  Product.find({})
    .limit(parseInt(req.params.count))
    .populate("subs")
    .populate("category")
    .sort([["createdAt", "desc"]])
    .then((prods) => res.status(200).json(prods))
    .catch((error) => res.status(400).json({ message: error.message }));
};

exports.readOneProduct = (req, res) => {
  Product.findOne({ slug: req.params.slug })
    .limit(parseInt(req.params.count))
    .populate("subs")
    .populate("category")
    .then((prod) => res.status(200).json(prod))
    .catch((error) => res.status(400).json({ message: error.message }));
};

exports.remove = (req, res) => {
  Product.findOneAndDelete({ slug: req.params.slug })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(400).json({ message: error.message }));
};

exports.update = (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  Product.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true })
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.listProducts = (req, res) => {
  const { sort, order, page } = req.body;
  const currentPage = page || 1;
  const perPage = 3;

  Product.find({})
  .skip((currentPage - 1) * perPage)
  .populate("subs")
  .populate("category")
  .sort([[sort, order]])
  .limit(perPage)
  .then((prods) => res.status(200).json(prods))
  .catch((error) => res.status(400).json({ message: error.message }));
};

exports.productsCount = (req, res) => {
  Product
  .estimatedDocumentCount()
  .then((count) => res.status(200).json(count))
  .catch((error) => res.status(400).json({ message: error.message }));
}

