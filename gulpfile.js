var gulp      = require("gulp");

var ts 	      = require("gulp-typescript");
var uglify    = require('gulp-uglify');
var tsProject = ts.createProject("tsconfig.json");

var sass       = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var minifycss  = require('gulp-minify-css');

var concat     = require('gulp-concat');
var rename     = require('gulp-rename');

gulp.task('sass',function(){
	gulp.src(['public/**/*.scss'])
		.pipe(sass({
			sourcemap: true
		}))
		.pipe(autoprefix({
			browsers: ['last 2 versions','Android >= 4.0']
		}))
		.pipe(gulp.dest('dist/public'))
		.pipe(concat('tg.css'))
		.pipe(gulp.dest('dist/public/styles'))
		.pipe(rename({basename: 'tg.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/public/styles'));
});



gulp.task("default",function(){
	gulp.run('sass');
	return tsProject.src()
			.pipe(tsProject()).js
			//.pipe(uglify())
			.pipe(gulp.dest("dist/public/js"))
});