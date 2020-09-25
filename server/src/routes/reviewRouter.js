const express = require("express");
const Review = require("../models/Review");
const auth = require("../middleware/auth");
const router = express.Router();

//get all
router.get("/allreviews", async (req, res) => {
  const data = await Review.find({});
  res.send(data);
});

//authed routes

//create review
router.post("/new", auth, async (req, res) => {
  req.body.userId = req.user; //ensure logged in user owns this
  try {
    const data = await Review.create(req.body);
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

//update review
router.patch("/updatereview/:id", auth, async (req, res) => {
  try {
    const data = await Review.findByIdAndUpdate(
      {
        _id: req.params.id,
        userId: req.user,
      },
      req.body,
      {
        new: true,
      }
    );
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

//delete review
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const data = await Review.findByIdAndDelete({
      _id: req.params.id,
      userId: req.user,
    });
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

module.exports = router;
