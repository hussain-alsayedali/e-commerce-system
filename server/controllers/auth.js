const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");
export function postLoginCustomer(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const currentCustomer = Customer.find((customer) => customer.email === email);
  // Compare the provided password with the stored password
  Customer.comparePassword(password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: "Error occurred" });
    }

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });

  const token = jwt.sign(
    { email: currentCustomer.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.json({ token });
}

export function postRegisterCustomer(req, res) {
  const user = new Customer({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  Customer.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error" });
      }
      if (existingUser) {
        res.status(400).json({ message: "Error registering new customer" });
      }
      user.save((err) => {
        if (err) {
          return res.status(500).json({ message: "Error registering is db" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        res.json({ token });
      });
    }
  );
}
