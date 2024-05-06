const Product = require("../models/Product");
const Category = require("../models/Category");
const cloudinary = require("../middleware/cloudinary");
exports.test = (req, res) => {
  res.json("mseow");
};

exports.getAllProducts = async (req, res) => {
  try {
    const categories = await Category.find().populate("products");
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId).populate("options");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};
