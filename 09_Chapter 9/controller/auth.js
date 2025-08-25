const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        const newUser = new user(req.body);
        var token = jwt.sign({ email: req.body.email }, "secret");
        newUser.token = token;
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createUser }