require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://${process.env.DB_HOST || "localhost"}/${
    process.env.DB_NAME || "find_a_trainer"
  }`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  //we're connected!
  console.log("Mongoose online");
});
