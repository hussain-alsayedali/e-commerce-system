const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const verifyToken = require("../middleware/auth");
router.post("/addProductToCart", verifyToken, cartController.addProductToCart);
router.post(
  "/deleteProductFromCart",
  verifyToken,
  cartController.deleteProductFromCart
);
router.post(
  "/updateQuantityOfCart",
  verifyToken,
  cartController.updateQuantityOfCart
);

module.exports = router;
