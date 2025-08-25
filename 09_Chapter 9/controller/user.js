const user = require("../model/user");


const  createUser = async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.json(newUser);
}


const allUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

const oneUser = async (req, res) => {
    const id = req.params.id;
    const singleUser = await user.findById(id);
    if (!singleUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(singleUser);
}

const update = async (req, res) => {
    const id = req.params.id;
    const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
}

const remove = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await user.findByIdAndDelete(id);
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(deletedUser);
} 

module.exports = {
    createUser,
    allUsers,
    oneUser,
    update,
    remove
};
