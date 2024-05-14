const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");
const { verifyTokenAdmin } = require("../middleware/auth");
// const { upload } = require("../middleware/multer");

router.post("/addProduct",verifyTokenAdmin, adminController.addProduct);
router.post("/addCategory",verifyTokenAdmin, adminController.addCategory);
router.post("/addOption", verifyTokenAdmin, adminController.addOption);
router.post(
  "/addProductToCategory",
  verifyTokenAdmin,
  adminController.addProductToCategory
);
router.post(
  "/increaseOptionUnits",
  verifyTokenAdmin,
  adminController.increaseOptionUnits
);
router.get("/getActiveCarts", verifyTokenAdmin, adminController.getActiveCarts);
router.get(
  "/getInActiveCarts",
  verifyTokenAdmin,
  adminController.getInActiveCarts
);

module.exports = router;
