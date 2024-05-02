const router = express.Router();

const authController = require("../controllers/auth");

router.post("/loginCustomer", authController.postLoginCustomer);
router.post("/registerCustomer", authController.postRegisterCustomer);

module.exports = router;
