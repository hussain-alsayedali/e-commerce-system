const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const { verifyTokenCustomer } = require("../middleware/auth");
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

router.get(
  "/getInactiveCarts",
  verifyTokenCustomer,
  cartController.getInactiveCarts
);

router.getCurrentCart(
  "/getCurrentCart",
  verifyTokenCustomer,
  cartController.getCurrentCart
);
module.exports = router;
