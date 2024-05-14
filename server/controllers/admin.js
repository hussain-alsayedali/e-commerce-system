const Product = require("../models/Product");
const Category = require("../models/Category");
const Option = require("../models/ProductOption");
const Cart = require("../models/Cart");

const cloudinary = require("../middleware/cloudinary");
exports.addProduct = async (req, res) => {
  console.log("ghghg")
  console.log(req.body)
  const { name, description, price} = req.body;
  // const result = await cloudinary.uploader.upload(req.file.path);
  try {
    // const category = await Category.findOne({ name: categoryname });

    // if (!category) {
    //   throw new Error(`Category ${categoryName} not found`);
    // }
    const product = await Product({
      name: name,
      Description: description,
      price: price,
      // image: result.secure_url,
      // cloudinaryId: result.public_id,
      // category: category._id,
    });
    await product.save();
    res.status(201).json("success");
  } catch (e) {
    console.log(e);
  }
};

exports.addCategory = async (req, res) => {
  console.log("test ")
  const { categoryName } = req.body;
  try {
    const category = await Category.findOne({ name: categoryName });
    console.log(category)

    if (category) {
      console.log("category is already exist")
      throw new Error(`Category ${categoryName} already exists`);
    }
    const newCategory = await Category({
      name: categoryName,
    });
    await newCategory.save();
    console.log("done")
    res.status(201).json("success");
    
  } catch (e) {
    console.log("ff")
    res.status(404).json("failed");
  }
};
exports.addProductToCategory = async (req, res) => {
  const { productName, categoryName } = req.body;
  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      res.status(400).json("error, not found");
    }
    const product = await Product.findOne({ name: productName });
    if (!product) {
      res.status(400).json("error, not found");
    }
    category.products.push(product._id);
    res.status(201).json("success");
  } catch (e) {
    console.log(e);
  }
};

exports.addOption = async (req, res) => {
  const { productId, optionName, units } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product ${productId} not found`);
    }
    const option = await Option({
      name: optionName,
      units: units,
    });
    product.options.push(option._id);
    await product.save();
    res.status(201).json("success");
  } catch (e) {
    console.log(e);
    res.status(500).json("server error");
  }
};

exports.increaseOptionUnits = async (req, res) => {
  const { optionId, units } = req.body;
  try {
    const option = await Option.findById(optionId);
    if (!option) {
      throw new Error(`Option ${optionId} not found`);
    }
    option.units += units;
    await option.save();
    res.status(201).json("success");
  } catch (e) {
    console.log(e);
    res.status(500).json("server error");
  }
};

exports.getActiveCarts = async (req, res) => {
  try {
    const carts = await Cart.find({ status: "active" });
    res.status(200).json(carts);
  } catch (e) {
    console.log(e);
    res.status(500).json("server error");
  }
};

exports.getInActiveCarts = async (req, res) => {
  try {
    const carts = await Cart.find({ status: "inactive" });
    res.status(200).json(carts);
  } catch (e) {
    console.log(e);
    res.status(500).json("server error");
  }
};
