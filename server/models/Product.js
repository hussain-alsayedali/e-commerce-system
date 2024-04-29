const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  Description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  options: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "option",
    default: [],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
