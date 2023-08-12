const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('sass/**/*.scss') // ** -> any subfolder inside the sass folder
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] })) // add the purge with the obj asd arg with all the html file in the root level 
    .pipe(dest('css'))
}

// this will watch any time the changes occur in the following file extns
function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles) // the 2nd arg -- when we want to run when the file changes
}

exports.default = series(buildStyles, watchTask)