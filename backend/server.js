require("dotenv").config();

const express = require("express");

const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/User");

mongoose.connect("mongodb://127.0.0.1:27017/auth");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
