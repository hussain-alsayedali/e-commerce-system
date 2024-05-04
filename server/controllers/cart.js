const Cart = require("./models/Cart");

exports.addProductToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const customerId = req.user.id;
  try {
    const cart = await Cart.findOne({ customerId });
    if (!cart) {
      const newCart = new Cart({
        customerId,
        products: [{ productId, quantity }],
      });
      await newCart.save();
      return res.json(newCart);
    } else {
      await cart.products.push({ productId, quantity });
      await cart.save(); // Save the updated cart
      return res.json(cart); // Return the updated cart
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProductFromCart = async (req, res) => {
  const { productId } = req.body;
  const customerId = req.user.id;
  try {
    const cart = await Cart.findOneAndUpdate(
      { customerId },
      { $pull: { products: { productId } } },
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
    const cart = await Cart.findOne({ customerId });
    if (!cart) {
      return res.status(500).json("no cart available");
    } else {
      const product = cart.products.find(
        (product) => product.productId === productId
      );
      if (!product) {
        return res.status(500).json("no product available");
      } else {
        if (operation === "increase") {
          product.quantity += quantity;
        } else if (operation === "decrease") {
          product.quantity -= quantity;
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
