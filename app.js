var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.disable("x-powerd-by");

app.use("/public", express.static(__dirname + "/public"));

app.use("/", require("./routes/index.js")); 

app.listen(3000);
