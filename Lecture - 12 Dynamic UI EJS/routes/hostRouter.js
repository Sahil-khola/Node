const express=require("express");
const path=require("path");
const rootdir = require("../utils/path.utils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  
  res.sendFile(path.join(rootdir, "views", "addHome.html"));
 });

const registerHome = [];
  hostRouter.post("/add-home", (req, res, next) => {
  registerHome.push(req.body.name);
  res.sendFile(path.join(rootdir, "views", "homeSucess.html"));
});



exports.hostRouter=hostRouter;
exports.registerHome = registerHome;