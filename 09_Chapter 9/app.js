const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routerUser = require("./router/user");
const jwt = require("jsonwebtoken");

app.use(express.json());
// DB connection----->
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error"));

    const auth = ((req,res,next) => {
      const token = req.get("Authorization").split("Bearer ")[1];
      console.log(token);
      var decoded = jwt.verify(token, "secret");
      console.log(decoded);
      next();
      
    })
    app.use("/users",routerUser);
// server start
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});