const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { verifyTokenCustomer, verifyToken } = require("../middleware/auth");
router.get(
  "/getCurrentUser",
  verifyTokenCustomer,
  userController.getCurrentUser
);

router.get("/getTokenType", verifyToken, userController.getTokenType);

module.exports = router;
