const express = require("express");
const { authCheck, adminCheck } = require("../middlewares/auth");
const {
  create,
  readAllProducts,
  remove,
  readOneProduct,
  update,
  listProducts,
  productsCount,
  productStar,
  listRelated,
  searchFilter
} = require("../controllers/product");
const router = express.Router();

router.get("/product/:slug", readOneProduct);
router.get("/products/total", productsCount);
router.get("/products/:count", readAllProducts);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.post("/product", authCheck, adminCheck, create);
router.put("/product/:slug", authCheck, adminCheck, update);
router.post("/products", listProducts);
// RATING
router.put("/product/star/:productId", authCheck, productStar);

router.get("/product/related/:productId", listRelated);
// SEARCH 
router.post("/search/filters", searchFilter)
module.exports = router;
