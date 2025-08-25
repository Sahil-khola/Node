const {createUser , allUsers , oneUser , update, remove} = require("../controller/user");
const express = require("express");
const router = express.Router();


router.post("/users",createUser);
router.get("/users",allUsers);
router.get("/users/:id",oneUser);
router.put("/users/:id",update);
router.delete("/users/:id",remove);

module.exports = router;