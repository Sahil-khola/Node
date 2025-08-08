const path = require("path");
const rootdir = require("../utils/path.utils");

exports.getAddHome =  (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addHome.html"));
 };
 
 exports.postAddHome =  (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, "views", "homeSucess.html"));
};

exports.getHome =  (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"));
};