const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const path = require("path");
const cors = require("cors");
const mainRoutes = require("./routes/main");
app.use(
  cors({
    origin: "*", // or specify the domains you want to allow
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
require("dotenv").config();

connectDB();

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
);

//Use forms for put / delete
// app.use(methodOverride("_method"));

app.use("/", mainRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});

// Export the Express API
module.exports = app;
