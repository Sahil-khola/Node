const { allUsers , oneUser , update, remove} = require("../controller/user");
const express = require("express");
const router = express.Router();


router.get("/",allUsers);
router.get("/:id",oneUser);
router.put("/:id",update);
router.delete("/:id",remove);

module.exports = router;