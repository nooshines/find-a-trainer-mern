const express = require("express");
const Review = require("../models/Review");
const User = require("../models/User");
const Trainer = require("../models/Trainer");
const auth = require("../middleware/auth");
const router = express.Router();

//get all public
router.get("/allreviews", async (req, res) => {
  const data = await Review.find({});
  res.send(data);
});

//create review
router.post("/new", auth, async (req, res) => {
  req.body.userId = req.user; //ensure logged in user owns this
  try {
    const user = await User.findOne({
      _id: req.user,
    });
    const trainer = await Trainer.findOne({
      _id: req.body.profileId,
    });
    if (!user && !trainer) {
      res.status(400).send("unable to create");
    } else {
      console.log("req.body", req.body);
      const newReview = await Review.create(req.body);
      const reviews = await Review.find({ profileId: trainer._id });
      const scores = reviews.map((review) => {
        return review.score;
      });
      const totalScore = scores.reduce((acc, score) => {
        return score + acc;
      }, 0);
      const avg = parseInt(totalScore / scores.length);
      await Trainer.findByIdAndUpdate(
        {
          _id: trainer._id,
        },
        {
          avgRating: avg,
        }
      );
      res.status(200).send(newReview);
    }
  } catch {
    res.status(400).send("bad request");
  }
});

//delete review
router.delete("/:reviewid", auth, async (req, res) => {
  req.body.userId = req.user; //ensure logged in user owns this
  try {
    const user = await User.findById({
      _id: req.user,
    });

    const review = await Review.findById({
      _id: req.params.reviewid,
      userId: req.user,
    });

    if (review && user) {
      console.log("true");
      const deleteReview = await Review.findByIdAndDelete(req.params.reviewid);
      res.status(200).send("review deleted");
    }
  } catch {
    res.status(400).send("bad request");
  }
});

module.exports = router;
