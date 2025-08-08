const express=require("express");
const { getAddHome ,postAddHome } = require("../controllers/home");

const hostRouter = express.Router();

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", postAddHome);


module.exports=hostRouter;