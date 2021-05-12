const express = require("express");
const { authCheck, adminCheck } = require("../middlewares/auth");
const {
  create,
  readAllProducts,
  remove,
  readOneProduct,
  update,
  listProducts
} = require("../controllers/product");
const router = express.Router();

router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", readAllProducts);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", readOneProduct);
router.put("/product/:slug", authCheck, adminCheck, update);
router.post("/products", listProducts)
module.exports = router;
