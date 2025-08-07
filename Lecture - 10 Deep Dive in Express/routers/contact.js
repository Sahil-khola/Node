const express = require("express");
const path = require("path");
const dirname = require("../utils/pathutils");
const contactRouter = express.Router();


contactRouter.get("/contact", (req, res, next) => {
  console.log("Handel for /Contact-us  ", req.url, req.method);
  res.sendFile(path.join(dirname,"views","contact.html"));
});


contactRouter.post("/contact", (req, res, next) => {
  console.log("Handling Request on POST ", req.url, req.method,req.body);
  res.sendFile(path.join(dirname,"views","contactSucess.html"));
});




module.exports = contactRouter;