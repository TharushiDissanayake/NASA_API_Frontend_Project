const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add the user name"],
      unique: [true, "User name already exists"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
