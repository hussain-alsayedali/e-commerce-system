const Cart = require("../models/Cart");
const Customer = require("../models/Customer");
exports.addProductToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const customerId = req.user.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(500).json("no customer available");
    }

    let cart = await Cart.findOne({
      _id: { $in: customer.Carts },
      status: "active",
    });
    if (!cart) {
      cart = new Cart({
        productOptions: [{ option: productId, quantity }],
      });
      await cart.save();
      customer.Carts.push(cart._id);
      await customer.save();
    } else {
      cart.productOptions.push({ option: productId, quantity });
      await cart.save();
    }

    return res.json(cart);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProductFromCart = async (req, res) => {
  const { productId } = req.body;
  const customerId = req.user.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      console.log("No customer found");
      res.status(500).json({ message: "Server error" });
    }

    const cart = await Cart.findOneAndUpdate(
      {
        _id: { $in: customer.Carts },
        status: "active",
      },
      { $pull: { productOptions: { option: productId } } },
      { new: true }
    );

    if (!cart) return res.status(500).json("no cart available");
    else {
      return res.json(cart); // Return the updated cart
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateQuantityOfCart = async (req, res) => {
  const { productId, operation, quantity } = req.body;

  const customerId = req.user.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      console.log("No customer found");
      res.status(500).json({ message: "Server error" });
    }

    const cart = await Cart.findOne({
      _id: { $in: customer.Carts },
      status: "active",
    });
    if (!cart) {
      return res.status(500).json("no cart available");
    } else {
      const productOption = cart.productOptions.find(
        (productOption) => productOption.option.toString() === productId
      );
      if (!productOption) {
        return res.status(500).json("no product option available");
      } else {
        if (operation === "increase") {
          productOption.quantity += quantity;
        } else if (operation === "decrease") {
          productOption.quantity -= quantity;
          if (productOption.quantity < 0) productOption.quantity = 0;
        } else {
          return res.status(500).json("invalid operation");
        }
        await cart.save(); // Save the updated cart
        return res.json(cart); // Return the updated cart
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getCurrentCart = async (req, res) => {
  const customerId = req.user.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      console.log("No customer found");
      res.status(500).json({ message: "Server error" });
    }

    const activeCart = await Cart.findOne({
      _id: { $in: customer.Carts },
      status: "active",
    });

    if (!activeCart) {
      res.status(500).json({ message: "Server error" });
    }
    res.json(activeCart);
  } catch (error) {
    console.error("Error finding active cart for user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getInActiveCarts = async (req, res) => {
  const customerId = req.user.id;
  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      console.log("No customer found");
      res.status(500).json({ message: "Server error" });
    }

    const inactiveCarts = await Cart.find({
      _id: { $in: customer.Carts },
      status: "inactive",
    });

    if (!inactiveCarts) {
      res.status(500).json({ message: "Server error" });
    }
    res.json(inactiveCarts);
  } catch (error) {
    console.error("Error finding active cart for user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
