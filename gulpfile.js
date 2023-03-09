const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function scssTask() {
   return src("./src/scss/style.scss", { sourcemaps: true })
      .pipe(sass())
      .pipe(postcss([cssnano()]))
      .pipe(dest("src/style", { sourcemaps: "." }));
}

/* function jsTask() {
   return src("./src/js/script.js", { sourcemaps: true })
      .pipe(terser())
      .pipe(dest("dist", { sourcemaps: "." }));
} */
//Local server setup
function browsersyncServe(callback) {
   browsersync.init({
      server: {
         baseDir: "./src",
      },
      index: "index.html",
   });
   callback();
}
//Reload local server
function browsersyncReload(callback) {
   browsersync.reload();
   callback();
}
//watch file, apply modification and reload the browser
function watchTask() {
   watch("*.html", browsersyncReload);
   watch(["./src/scss/**/*.scss"], series(scssTask, browsersyncReload));
   //watch(["./src/scss/**/*.scss", "./src/js/**/*.js"], series(scssTask, jsTask, browsersyncReload));
}

exports.default = series(scssTask, /* jsTask, */ browsersyncServe, watchTask);
