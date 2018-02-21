// mongoose config
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://admin:123@ds245218.mlab.com:45218/next-races");

// enable use of Promises instead of callbacks
mongoose.Promise = Promise;

// export Race schema
module.exports.Race = require("./race");