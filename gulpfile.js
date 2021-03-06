var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    //sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    //jade        = require('gulp-jade'),
    pug = require('gulp-pug'),
    //slim        = require("gulp-slim"), //let's use slim too :)
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    app         = express(),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    server      = tinylr();


// --- Basic Tasks ---
/*gulp.task('css', function() {
  return gulp.src('src/css/*')
    .pipe(
      sass( {
        includePaths: ['src/css'],
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('dist/css/') )
    .pipe( livereload( server ));
});
*/

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe( concat('all.min.js'))
    //.pipe( uglify() )
    .pipe( gulp.dest('dist/js/'))
    .pipe( livereload( server ));
});

gulp.task('templates', function buildHTML() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe( livereload( server ));
});

gulp.task('X', function() {
  return gulp.src('src/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe( livereload( server ));
});

/*gulp.task('slim', function(){
  gulp.src("src/*.slim")
    .pipe( slim() )
    .pipe(gulp.dest("dist/"));
});
*/

gulp.task('express', function() {
  app.use(express.static(path.resolve('./dist')));
  app.listen(1337);
  gutil.log('Listening on port: 1337');
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }
    //gulp.watch('src/css/*',['css']);
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/*.pug',['templates']);
    //gulp.watch('src/*.slim',['slim']);
  });
});

// Default Task
gulp.task('default', ['js',/*'slim',*/'templates','express','watch']);
