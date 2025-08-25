const Product = require("../model/products")
const handeleAbout = (req,res)=>{
    res.send("About");
};
const handeleContact = (req,res)=>{
    res.send("contact");
};
const handeleLogin = (req,res)=>{
    res.send("logIn");
};

const allProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const allProductSSR = async (req, res) => {
  const products = await Product.find();
  res.render("../views/index.ejs", { products });
};



module.exports = {handeleLogin,handeleContact,handeleAbout,allProduct,allProductSSR};