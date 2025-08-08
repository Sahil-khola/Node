const express = require("express");
const { getHome } = require("../controllers/home");

const userRouter = express.Router();


userRouter.get("/",getHome )

module.exports=userRouter;