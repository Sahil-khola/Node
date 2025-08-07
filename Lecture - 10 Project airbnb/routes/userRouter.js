const express = require("express");
const rootdir = require("../utils/path.utils");

const path = require("path");
const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"));
});

module.exports=userRouter;