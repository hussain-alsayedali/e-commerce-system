const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { verifyTokenCustomer } = require("../middleware/auth");
router.get(
  "/getCurrentUser",
  verifyTokenCustomer,
  userController.getCurrentUser
);

module.exports = router;
