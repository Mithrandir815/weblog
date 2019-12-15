var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");
var uglify = require("gulp-uglify");

gulp.task("minify-javascripts.clean", () => {
  return del("./stylesheets/**/*", { cwd: config.path.output });
});

gulp.task("minify-javascripts",["minify-javascripts.clean"], () => {
  gulp.src("./stylesheets/**/*", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest("./stylesheets", { cwd: config.path.output }));
});
