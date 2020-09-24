const express = require("express");
GeoJSON = require("geojson");
const router = express.Router();
const Trainer = require("../models/Trainer");
const auth = require("../middleware/auth");
const permission = require("../middleware/permission");
const geocoder = require("../geocoder");

//get a list of trainers
//Search for trainers that are near that lng and lat
router.post("/findtrainers", async (req, res) => {
  try {
    const geoCoderData = await geocoder.geocode(`${req.body.location} AU`);
    console.log("geocoderData", geoCoderData);
    console.log("reqbody", req.body);

    if (geoCoderData && geoCoderData.length) {
      const trainers = await Trainer.find({
        location: {
          $near: {
            // distance in meters from lng and lat values
            $maxDistance: req.body.distance ? req.body.distance : 20000,
            $geometry: {
              type: "Point",
              // Put the actual lng and lat values
              coordinates: [
                geoCoderData[0].longitude,
                geoCoderData[0].latitude,
              ],
            },
          },
        },
      });
      console.log(trainers);
      res.send(trainers);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

//get all trainers
router.get("/", async (req, res) => {
  const data = await Trainer.find({});
  res.send(data);
});

//get trainer by id
router.get("/trainers/:id", async (req, res) => {
  const data = await Trainer.findOne({ _id: req.params.id });
  res.send(data);
});

//authed routes

//get trainer profile
router.get("/trainer/profile", auth, async (req, res) => {
  const data = await Trainer.findOne({ userId: req.user });
  res.send(data);
});

//new profile
router.post(
  "/trainers",
  auth,
  permission("createOwn", "profile"),
  async (req, res) => {
    const currentTrainer = await Trainer.findOne({ userId: req.user });
    console.log("currenttrainer", currentTrainer);
    if (currentTrainer && currentTrainer._id) {
      res.status(404).send("Profile already existed");
    } else {
      console.log(req.body);
      req.body.userId = req.user;
      const geoCoderData = await geocoder.geocode(req.body.address);
      console.log("geocoderdata", geoCoderData);
      if (geoCoderData && geoCoderData.length) {
        req.body.location = {
          type: "Point",
          coordinates: [geoCoderData[0].longitude, geoCoderData[0].latitude],
        };
        req.body.address = geoCoderData[0].formattedAddress;
        const data = await Trainer.create(req.body).catch((err) => {
          console.log(err);
        });
        res.send(data);
      } else res.status(400).send("wrong address entered");
    }
  }
);

//update  profile

router.patch(
  "/trainers/:id",
  auth,
  permission("updateOwn", "profile"),
  async (req, res) => {
    console.log(req.body);
    try {
      const trainer = await Trainer.findOneAndUpdate(
        { _id: req.params.id, userId: req.user },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).send(trainer);
    } catch (error) {
      res.status(400).send("bad request");
      console.log(error);
    }
  }
);

//delete profile

router.delete("/trainers/:id", auth, async (req, res) => {
  console.log("deleteroute", req.user);
  console.log("deleteroute", req.params.id);
  try {
    const trainer = await Trainer.findOneAndDelete({
      _id: req.params.id,
      userId: req.user,
    });
    res.status(200).send("Profile successfully deleted");
  } catch (error) {
    res.status(400).send("bad request");
    console.log(error);
  }
});
module.exports = router;
