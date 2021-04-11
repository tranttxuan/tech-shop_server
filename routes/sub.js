const express = require("express");
const { } = require("../controllers/auth");
const { listAllSub, readSub, createSub, updateSub, deleteSub } = require("../controllers/sub");
const { authCheck, adminCheck } = require("../middlewares/auth");
const { } = require("../models/User");
const router = express.Router();

router.get("/subs", listAllSub);
router.get("/sub/:slug", readSub);
router.post("/sub", authCheck, adminCheck, createSub);
router.put("/sub/:slug", authCheck, adminCheck, updateSub);
router.delete("/sub/:slug", authCheck, adminCheck, deleteSub);

module.exports = router;
