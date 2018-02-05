// mongoose config
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/racebets-api");

// enable use of Promises instead of callbacks
mongoose.Promise = Promise;

// export Race schema
module.exports.Race = require("./race");