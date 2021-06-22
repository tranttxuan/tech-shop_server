const express = require("express");
const { addToWishlist, wishlist, removeFromWishlist, applyCouponToCart, userCart, getCart, emptyCart, saveAddress, createOrder, orders } = require("../controllers/user");
const { authCheck } = require("../middlewares/auth");
const router = express.Router();

router.post("/user/cart", authCheck, userCart);
router.get("/user/cart", authCheck, getCart);
router.delete("/user/cart", authCheck, emptyCart);
router.post("/user/address", authCheck, saveAddress);
router.post('/user/cart/coupon', authCheck, applyCouponToCart);
router.post('/user/order', authCheck, createOrder);
router.get('/user/order', authCheck, orders);
router.post('/user/wishlist', authCheck, addToWishlist);
router.get('/user/wishlist', authCheck, wishlist);
router.put('/user/wishlist/:productId', authCheck, removeFromWishlist);
module.exports = router;
