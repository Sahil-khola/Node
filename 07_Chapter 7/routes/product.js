const express = require("express");
const {
  allProduct,
  createProduct

} = require("../controller/product");

const router = express.Router();

router.get("/products", allProduct);
router.post("/products", createProduct);

module.exports = router;
