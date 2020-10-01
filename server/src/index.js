const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Trainer = require("./models/Trainer");
const upload = multer({ dest: "uploads/" });
const auth = require("./middleware/auth");

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
// app.post("/fileupload", auth, upload.single("avatar"), async (req, res) => {
//   try {
//     console.log(req.file);
//     console.log(__dirname);
//     fs.rename(
//       path.join(__dirname, "../", "uploads/", req.file.filename),
//       path.join(__dirname, "../", "uploads/", req.file.originalname),
//       (e) => {
//         console.log(e);
//       }
//     );
//     const profile = await Trainer.findOne({ userId: req.user });
//     profile.imageUrl = req.file.originalname;
//     await profile.save();
//     console.log(profile);
//     res.send(profile);
//   } catch (e) {
//     res.send(e);
//     console.log(e);
//   }
// });

//get file
app.get("/getfile", auth, async (req, res) => {
  try {
    const trainer = await Trainer.findOne({ userId: req.user });
    console.log(trainer.imageUrl);
    res.sendFile(trainer.imageUrl, { root: "./uploads" });
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
