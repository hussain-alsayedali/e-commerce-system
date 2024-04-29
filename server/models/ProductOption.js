const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  name: { type: String },
  units: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

module.exports = mongoose.model("ProductOption", OptionSchema);
