const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productOptions: [
    {
      option: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Cart", CartSchema);
