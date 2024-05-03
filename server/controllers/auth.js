const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
exports.postLoginCustomer = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const currentCustomer = await Customer.findOne({ email: email });

    if (!currentCustomer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    currentCustomer.comparePassword(password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    });
    const token = jwt.sign(
      { id: currentCustomer._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.postRegisterCustomer = async (req, res) => {
  console.log(req.body, "clicked");
  const user = new Customer({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const existingUser = await Customer.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Error registering new customer" });
    }
    console.log(user);
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.test = (req, res) => {
  res.json("meow");
};
