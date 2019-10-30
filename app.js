var systemlogger = require("./lib/log/systemlogger.js");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.disable("x-powerd-by");

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use("/", require("./routes/index.js"));

app.use(systemlogger());

var logger = require("./lib/log/logger.js").application;
logger.error("test", "message");

app.listen(3000);
