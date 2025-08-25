const express = require("express");
const { handeleAbout,handeleContact,handeleLogin,allProduct,allProductSSR } = require("../controller/home");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send(`<a href='/about'>About</a>
              <a href='/contact'>Contact</a>
              <a href='/login'>Login</a>
              <a href='/show'>Show</a>
              <a href='/home'>Home</a>`);
})

router.get("/about",handeleAbout);
router.get("/contact",handeleContact);
router.get("/login",handeleLogin);
router.get("/show",allProduct);
router.get("/home",allProductSSR);

module.exports = router;