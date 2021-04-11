const express = require("express");
const { authCheck, adminCheck } = require("../middlewares/auth");
const { create, readAllProducts } = require("../controllers/product");
const router = express.Router();

router.post("/product", authCheck, adminCheck, create)
router.get("/product", readAllProducts)
module.exports = router;
