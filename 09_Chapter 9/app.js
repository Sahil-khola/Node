const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routerUser = require("./router/user");
app.use(express.json());
// DB connection----->
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error"));

app.use(routerUser);

// server start
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});