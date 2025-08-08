const express=require("express");
const path=require("path");
const rootdir = require("../utils/path.utils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addHome.html"));
 });

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, "views", "homeSucess.html"));
});


module.exports=hostRouter;