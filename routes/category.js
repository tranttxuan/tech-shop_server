const express = require("express");
const { } = require("../controllers/auth");
const { createCategory, listAllCategory, readCategory, updateCategory, deleteCategory } = require("../controllers/category");
const { authCheck, adminCheck } = require("../middlewares/auth");
const { } = require("../models/User");
const router = express.Router();

router.get("/categories", listAllCategory);
router.get("/category/:slug", readCategory);
router.post("/category", authCheck, adminCheck, createCategory);
router.put("/category/:slug", authCheck, adminCheck, updateCategory);
router.delete("/category/:slug", authCheck, adminCheck, deleteCategory);

module.exports = router;
