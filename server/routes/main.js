const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

router.post("/loginCustomer", authController.postLoginCustomer);
router.post("/registerCustomer", authController.postRegisterCustomer);
router.post("/loginAdmin", authController.postLoginAdmin);

router.get("/", authController.test);

module.exports = router;
