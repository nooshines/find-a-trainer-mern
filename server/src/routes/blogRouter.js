const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");
const router = express.Router();

// public routes

//Get All
router.get("/", async (req, res) => {
  const data = await Blog.find({});
  res.send(data);
});

//authed routes

//get all blogs by userId
router.get("/trainerblog", auth, async (req, res) => {
  const data = await Blog.find({
    userId: req.user,
  });
  res.send(data);
});

//get blog by user blogId
router.get("/trainerblog/:blogId", async (req, res) => {
  const data = await Blog.findOne({
    _id: req.params.blogId,
    userId: req.user,
  });
  console.log(data);
  res.send(data);
});

/*
    {
        title: String,
        body: String,
    }
*/

//New Route
router.post("/new", auth, async (req, res) => {
  req.body.userId = req.user; //ensure logged in user owns this list
  try {
    const data = await Blog.create(req.body);
    res.json(data);
  } catch {
    res.status(400).send("bad request!");
  }
});

//Update Route
router.patch("/update/:id", auth, async (req, res) => {
  try {
    const data = await Blog.findByIdAndUpdate(
      { _id: req.params.id, userId: req.user },
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

//Delete Route
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const data = await Blog.findByIdAndDelete({
      _id: req.params.id,
      userId: req.user,
    });
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

module.exports = router;
