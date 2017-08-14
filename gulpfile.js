var gulp = require('gulp');
// uzywaj naszej paczki gulp.
var sass = require("gulp-sass");
// uzywaj paczki sciagnietej przez nas - gulp-sass
var sourcemaps = require("gulp-sourcemaps");

// var autoprefixer = require("gulp-autoprefixer");        nie trzeba wstawiac prefiksow... ale jeszcze trzeba dac "npm install --save-dev gulp-autoprefixer"

gulp.task("sassMy", function() {
    return gulp.src("styles/**/*.scss")
// return - skad ma wziasc pliki
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:"expanded"  /*zeby wyciac wszystkie spacje, komentarze itp... zeby kod byl jak najkrutszy po skompilowaniu z saas na css.  EXPANDED - zrobi nam najbardiej przejzyscie jak potrafi */

        }))
        //   .pipe(autoprefixer())    powoduje, ze nie trzeba wstawiac prefiksow
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"));
        // podane destinetion
});

gulp.task("watch", function() {
    gulp.watch("styles/**/*.scss", ["sassMy"])
});

//* browsersync - paczki do odswierzania przegladarki

gulp.task("default", ["sassMy", "watch"]);
// MUSI byc nazwa deafult - wyznacza kolejnosc wykonywania zadan... wywoluje w konsoli komenda "gulp"
