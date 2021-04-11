const admin = require("../firebase/index");
const User = require("../models/User");

exports.authCheck = async (req, res, next) => {
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken)
        // console.log("firebase user", firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token' })
    }
}

exports.adminCheck = async (req, res, next) => {
    // step 1: check if user is authenticated - step 2: check if user is admin
    const { email } = req.user;
    const adminUser = await User.findOne({ email })
    if (adminUser.role !== "admin") {
        res.status(403).json({ message: "Admin resource. Access denied" })
    } else {
        next();
    }
}