const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/getCurrentUser", userController.getCurrentUser);

module.exports = router;
