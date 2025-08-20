const express = require("express");
const app = express();

const router = require("./routes/product");

app.get("/", (req, res) => {
  res.send(`<a href='/products'>Products</a>`);
});

app.use(express.json());
app.use(express.urlencoded)

// DB connection----->
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error"));



// CRUD API ------->

app.use(router);

// server start
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
