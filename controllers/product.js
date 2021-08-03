const slugify = require("slugify");
const Product = require("../models/Product");
const User = require("../models/User");

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
    Product.estimatedDocumentCount()
        .then((count) => res.status(200).json(count))
        .catch((error) => res.status(400).json({ message: error.message }));
};

exports.productStar = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    const user = await User.findOne({ email: req.user.email });
    const { star } = req.body;

    //check if currently logged-in user has already added rating to this product
    let existingRatingObject = product.ratings.find(
        (rating) => rating.postedBy.toString() === user._id.toString()
    );
    if (existingRatingObject === undefined) {
        //user has not yet added a rating
        Product.findByIdAndUpdate(
            product._id,
            {
                $push: { ratings: { star: star, postedBy: user._id } },
            },
            { new: true }
        )
            .then((response) => res.status(200).json(response))
            .catch((error) => res.status(400).json({ message: error.message }));
    } else {
        //user has yet added a rating, update the rating
        Product.updateOne(
            { ratings: { $elemMatch: existingRatingObject } },
            { $set: { "ratings.$.star": star } },
            { new: true }
        )
            .then((response) => res.status(200).json(response))
            .catch((error) => res.status(400).json({ message: error.message }));
    }
};

exports.listRelated = (req, res) => {
    Product.findById(req.params.productId)
        .then((product) => {
            Product.find({
                _id: { $ne: product._id },
                category: product.category
            })
                .limit(3)
                .populate("subs")
                .populate("category")
                .sort([["price", "desc"]])
                .then((prods) => res.status(200).json(prods))
                .catch((error) => res.status(400).json({ message: error.message }));
        })
        .catch((error) => res.status(400).json({ message: error.message }));
};

// SEARCH / FILTER 
exports.searchFilter = (req, res) => {
    const request = req.body;
    
    const minPrice = (request.price && request.price.length !== 0) ? request.price[0] : 0;
    const maxPrice = (request.price && request.price.length !== 0) ? request.price[1] : 0;
    const text = request.text && request.text;
    const category = (request.category && request.category.length !== 0) && request.category;
    const stars = request.stars;
    const sub = request.sub;
    const brand = request.brand;
    const color = request.color;
    const shipping = request.shipping;

    //create query to search
    const priceFilter = maxPrice ? { price: { $gte: minPrice, $lte: maxPrice } } : {};
    const textFilter = text ? { $text: { $search: text } } : {};
    const categoryFilter = category ? { category } : {};
    const starsFilter = stars
        ? [{
            $project: {
                document: "$$ROOT",
                floorAverage: {
                    $floor: { $avg: "$ratings.star" },
                }
            }
        }, { $match: { floorAverage: stars } }]
        : [{ $match: {} },];
    const subFilter = sub ? { subs: sub } : {};
    const brandFilter = brand ? { brand } : {};
    const colorFilter = color ? { color } : {};
    const shippingFilter = shipping ? { shipping } : {}

    Product
        .aggregate(starsFilter)
        .then(response => {
            Product
                .find({
                    ...priceFilter,
                    ...textFilter,
                    ...categoryFilter,
                    _id: response,
                    ...subFilter,
                    ...brandFilter,
                    ...colorFilter,
                    ...shippingFilter,
                })
                .populate("subs", "_id name")
                .populate("category", "_id name")
                .populate("postedBy", "_id name")
                .then((prods) => res.status(200).json(prods))
                .catch((error) => res.status(400).json({ message: error.message }));
        })
        .catch ((error) => res.status(400).json({ message: error.message }));
}