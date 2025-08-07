const express = require("express");
const path = require("path");
const dirname = require("../utils/pathutils");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("Handel for / get ", req.url, req.method);
  res.sendFile(path.join(dirname, "views", "index.html"));
});

module.exports = userRouter;