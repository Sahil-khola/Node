const express = require("express");
const {
  allProduct,
  createProduct,
  oneProduct,
  replaceProduct,
  updatedProduct, 
  deleteProduct 

} = require("../controller/product");

const router = express.Router();

router.get("/products",allProduct);
router.get("/products/:id",oneProduct);
router.post("/products",createProduct);
router.put("/products/:id",replaceProduct);
router.patch("/products/:id",updatedProduct);
router.delete("/products/:id",deleteProduct);

module.exports = router;
