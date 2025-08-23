const express = require("express");
const { handeleAbout,handeleContact,handeleLogin } = require("../controlller/home");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Home");
})

router.get("/about",handeleAbout);
router.get("/contact",handeleContact);
router.get("/login",handeleLogin);

module.exports = router;