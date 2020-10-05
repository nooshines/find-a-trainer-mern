const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
  },
  userName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer",
  },
});

module.exports = mongoose.model("Review", schema);
