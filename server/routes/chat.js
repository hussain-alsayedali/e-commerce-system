const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chat");
const { verifyTokenCustomer } = require("../middleware/auth");

router.post("/sendChat", chatController.sendChat);
module.exports = router;
