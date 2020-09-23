const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Trainer = require("./models/Trainer");
const upload = multer({ dest: "uploads/" });

require("./mongo");

//env
require("dotenv").config();

//variables
const port = process.env.EXPRESS_PORT || 3000;

//setup express app
const app = express();

//routes
const userRouter = require("./routes/userRouter");
const trainerRouter = require("./routes/trainerRouter");
const blogRouter = require("./routes/blogRouter");
const reviewRouter = require("./routes/reviewRouter");

//static path
app.use(express.static(path.join(__dirname, "../", "uploads/")));

//middleware
app.use(express.json()); //parse JSON body

//routes
app.use("/user", userRouter);
app.use("/trainer", trainerRouter);
app.use("/blog", blogRouter);
app.use("/review", reviewRouter);

//file upload
app.post("/fileupload", upload.single("avatar"), async (req, res) => {
  console.log(req.file);
  console.log(__dirname);
  fs.rename(
    path.join(__dirname, "../", "uploads/", req.file.filename),
    path.join(__dirname, "../", "uploads/", req.file.originalname),
    (e) => {
      console.log(e);
    }
  );
  const profile = await Trainer.findOne({ userId: req.user });
  profile.imageUrl = req.file.originalname;
  await profile.save();
  console.log(profile);
  res.send(profile);
});
//get
app.get("/getfile", (req, res) => {
  Trainer.find({}, (err, img) => {
    if (err) {
      console.log(err);
    } else {
      res.send("app", { img: img });
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
