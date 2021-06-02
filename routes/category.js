const express = require("express");
const { createCategory, listAllCategory, readCategory, updateCategory, deleteCategory, getSubs } = require("../controllers/category");
const { authCheck, adminCheck } = require("../middlewares/auth");
const router = express.Router();

router.get("/categories", listAllCategory);
router.get("/category/:slug", readCategory);
router.post("/category", authCheck, adminCheck, createCategory);
router.put("/category/:slug", authCheck, adminCheck, updateCategory);
router.delete("/category/:slug", authCheck, adminCheck, deleteCategory);
router.get("/category/subs/:_id", getSubs)
module.exports = router;
