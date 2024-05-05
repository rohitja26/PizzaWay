const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://rohitjain26102003:qwert12345@pizzaway.onbxefy.mongodb.net/pizzaway";

mongoose.connect(mongoURL);
var db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB server initialised");
});

db.on("error", () => {
  console.log("Error while conneting to mongodb");
});

module.exports = mongoose;
