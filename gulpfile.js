var gulp    = require('gulp');
var gutil    = require('gulp-util');
var replace = require('gulp-replace-task');
var args    = require('yargs').argv;
var fs      = require('fs');

gulp.task('replace', function () {
  // Get the environment from the command line
  var env = args.env || 'localdev';

  // Read the settings from the right file
  var filename = env + '.json';
  var settings = JSON.parse(fs.readFileSync('./config/' + filename, 'utf8'));
  gutil.log('file name:'+ filename);
  gutil.log('URL to be replaced:'+ settings.apiUrl);
  // Replace each placeholder with the correct value for the variable.
  gulp.src('./www/js/app-constants.js')
  .pipe(replace({
    patterns: [
      {
        match: 'apiUrl',
        replacement: settings.apiUrl
      }
    ]
  }))
  .pipe(gulp.dest('build/js'));
});
