const gulp     = require('gulp');
const compiler = require('google-closure-compiler-js').gulp();

// TODO: Produce multiple files when https://github.com/google/closure-compiler-js/issues/17 resolved
gulp.task('dist', function () {
	return gulp.src([
		'js/pickmeup.js'
		// 'js/jquery.pickmeup.twitter-bootstrap.js',
		// 'js/jquery.pickmeup.uikit.js'
	])
		.pipe(compiler({
			jsOutputFile : 'pickmeup.min.js',
			languageIn   : 'ES5',
			languageOut  : 'ES5'
		}))
		.pipe(gulp.dest('dist'));
});
