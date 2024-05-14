const Customer = require("../models/Customer");

exports.getCurrentUser = async (req, res) => {
  try {
    const currentUser = await Customer.findById(req.user.id)
      .populate("faviorities")
      .populate("Carts");
    res.json(currentUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
