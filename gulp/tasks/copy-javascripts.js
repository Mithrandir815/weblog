var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

gulp.task("copy-javescripts.clean", () => {
  return del("./javescripts/**/*", { cwd: config.path.output });
});

gulp.task("copy-javescripts",["copy-javescripts.clean"], () => {
  gulp.src("./javescripts/**/*", { cwd: config.path.input })
    .pipe(gulp.dest("./javescripts", { cwd: config.path.output }));
});
