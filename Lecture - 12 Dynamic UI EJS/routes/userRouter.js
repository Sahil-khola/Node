const express = require("express");
const rootdir = require("../utils/path.utils");
const { registerHome } = require("./hostRouter");

const path = require("path");
const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
  console.log(registerHome);
  res.render("home", { home: registerHome });
});

module.exports=userRouter;