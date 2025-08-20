const express = require("express");
const {
  oneProduct,
  allProduct,
  sendData,
  updateData,
  deleteProduct,
} = require("../controller/product");

const router = express.Router();

router.get("/products", allProduct);
router.get("/products/:id", oneProduct);
router.post("/products", sendData);
router.put("/products/:id", updateData);
router.delete("/products/:id", deleteProduct);

module.exports = router;
