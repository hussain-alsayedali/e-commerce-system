const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  Description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  cloudinaryId: {
    type: String,
    require: true,
  },
  options: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "option",
    default: [],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
