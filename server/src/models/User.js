const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "basic",
    enum: ["basic", "trainer"],
    required: true,
  },
  avatar: {
    type: String,
  },
});

module.exports = mongoose.model("User", schema);
