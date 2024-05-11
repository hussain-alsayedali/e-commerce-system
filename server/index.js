const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/user");
const mainRoutes = require("./routes/main");
const productRoutes = require("./routes/product");
const adminRoutes = require("./routes/admin");
const cartRoutes = require("./routes/cart");
const noteRoutes = require("./routes/cart");

app.use(
  cors({
    origin: "*", // or specify the domains you want to allow
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const Category = require("./models/Category");
const Cart = require("./models/Cart");
const Admin = require("./models/Admin");
const Customer = require("./models/Customer");
const Product = require("./models/Product");
const ProductOption = require("./models/ProductOption");

require("dotenv").config();

connectDB();
app.use(logger("dev"));

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
);

//Use forms for put / delete
// app.use(methodOverride("_method"));

function pop() {
  const admin = new Admin({
    name: "moha",
    userName: "admin",
    password: "admin",
  });

  try {
    admin.save();
  } catch (e) {
    console.log(e);
  }

  console.log("saved");
}
// pop();

app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/admin", adminRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);
app.use("/note", noteRoutes);
//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});

// Export the Express API
module.exports = app;
