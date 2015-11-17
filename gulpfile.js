var gulp = require("gulp");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var shell = require("gulp-shell");
var concat = require("gulp-concat");
var minifyCSS = require("gulp-minify-css");

var pathReference = {
    appEntryPoints: ["src/app.js"],
    buildJSFile: "app-build.js",
    buildCSSFile: "app-build.css",
    buildDir: "build",
    devCSSDir: "src/styling/**/*",
    cssFrameworkSource: "node_modules/bootstrap/dist/css/bootstrap.min.css",
    cssFrameworkBuild: "css-framework.css"
};

gulp.task("watch", function() {

    gulp.watch(pathReference.devCSSDir, ['minifyCSS']);

    var browserifyConfig = browserify({
        entries: [pathReference.appEntryPoints],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });

    var watcher = watchify(browserifyConfig);

    return watcher.on("update", function() {
        watcher.bundle()
            .pipe(source(pathReference.buildJSFile))
            .pipe(gulp.dest(pathReference.buildDir));
        console.log("updated");
    })
        .bundle()
        .pipe(source(pathReference.buildJSFile))
        .pipe(gulp.dest(pathReference.buildDir));
});

gulp.task("frameworkSourceBuild", shell.task([
    "cp " + pathReference.cssFrameworkSource + " " + pathReference.buildDir + "/" + pathReference.cssFrameworkBuild
]));

gulp.task("minifyCSS", function() {
    gulp.src(pathReference.devCSSDir)
        .pipe(minifyCSS())
        .pipe(concat(pathReference.buildCSSFile))
        .pipe(gulp.dest(pathReference.buildDir));
});