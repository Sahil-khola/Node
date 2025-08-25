const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: { type: String, required: true , minLength : 6}
});
const user = mongoose.model("user", userSchema);
module.exports = user;
