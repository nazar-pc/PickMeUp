const gulp     = require('gulp');
const compiler = require('google-closure-compiler').gulp();

// TODO: Produce multiple files when https://github.com/google/closure-compiler-js/issues/17 resolved
gulp.task('dist', function () {
	return gulp.src([
		'js/pickmeup.js'
		// 'js/jquery.pickmeup.twitter-bootstrap.js',
		// 'js/jquery.pickmeup.uikit.js'
	])
		.pipe(compiler({
			js_output_file : 'pickmeup.min.js',
			language_in    : 'ES5',
			language_out   : 'ES5'
		}))
		.pipe(gulp.dest('dist'));
});
