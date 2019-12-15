var config = require("./gulp/config.js");
var gulp = require("gulp");
var load = require("require-dir");
var development, production;

load("./gulp/tasks", { resurse: true });

development = [
  "copy-third_party",
  "copy-images",
  "copy-javascripts",
  "compile-sass"
];

production = [
  "copy-third_party",
  "copy-images",
  "minify-javascripts",
  "compile-sass"
];
console.log(config.env);
gulp.task("default", config.env.IS_DEVELOPMENT ? development : production);
