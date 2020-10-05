const mongoose = require("mongoose");
// const geocoder = require("../geocoder");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  certificate: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please add an adress"],
  },
  bio: {
    type: String,
    required: false,
  },
  imageUrl: String,
  location: {
    type: pointSchema,
    index: "2dsphere",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  avgRating: Number,
  // review: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Review",
  //   },
  // ],
});

module.exports = mongoose.model("Trainer", schema);
