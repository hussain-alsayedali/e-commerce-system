const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const { verifyTokenCustomer } = require("../middleware/auth");
router.post(
  "/addProductToCart",
  verifyTokenCustomer,
  cartController.addProductToCart
);
router.post(
  "/deleteProductFromCart",
  verifyTokenCustomer,
  cartController.deleteProductFromCart
);
router.post(
  "/updateQuantityOfCart",
  verifyTokenCustomer,
  cartController.updateQuantityOfCart
);

router.get(
  "/getInactiveCarts",
  verifyTokenCustomer,
  cartController.getInActiveCarts
);

router.get(
  "/getCurrentCart",
  verifyTokenCustomer,
  cartController.getCurrentCart
);
module.exports = router;
