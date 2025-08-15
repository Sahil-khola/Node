const express = require("express");
const usersRouter = express.Router();
const {allUsers,oneUser,sendData,updateData,deleteUser} = require("../controller/users");

usersRouter.get("/users",allUsers);

usersRouter.get("/users/:id",oneUser);

usersRouter.post("/users",sendData);

usersRouter.put("/users/:id",updateData);

usersRouter.delete("/users/:id",deleteUser);
module.exports = usersRouter