const express = require("express");
const path = require("path");

require("./mongo");

//env
// require("dotenv").config();

//variables
const port = process.env.EXPRESS_PORT || 3000;

//setup express app
const app = express();

//routes
const userRouter = require("./routes/userRouter");
const trainerRouter = require("./routes/trainerRouter");
const blogRouter = require("./routes/blogRouter");
const reviewRouter = require("./routes/reviewRouter");

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  console.log("Express app running in production");
  app.use(express.static("./uploads"));
  app.use(express.static("./public"));
} else {
  app.use(express.static(path.join(__dirname, "../", "uploads/")));
}

//static path
// app.use(express.static(path.join(__dirname, "../", "uploads/")));

//middleware
app.use(express.json()); //parse JSON body

//routes
app.use("/user", userRouter);
app.use("/trainer", trainerRouter);
app.use("/blog", blogRouter);
app.use("/review", reviewRouter);

if (isProd) {
  app.get("/*", (req, res) => {
    res.sendFile("./public/index.html", { root: "./" });
  });
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
