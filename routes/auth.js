const express = require("express");
const { createUpdateUser, currentUser } = require("../controllers/auth");
const { authCheck, adminCheck } = require("../middlewares/auth");
const router = express.Router();

router.post("/create-or-update-user", authCheck, createUpdateUser);
router.post("/current-user", authCheck, currentUser)
router.post("/current-admin", authCheck, adminCheck, currentUser)

module.exports = router;
