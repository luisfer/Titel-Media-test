import gulp from 'gulp';
import gulputil from 'gulp-util';
import gulpmocha from 'gulp-mocha';
import mocha from 'mocha';
import less from 'gulp-less';
import concat from 'gulp-concat';
import chai from 'chai';
import jsdom from 'mocha-jsdom';

gulp.task('default', () => {
        return gulp.src('tests/test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it 
		.pipe(gulpmocha({reporter: 'nyan'}));
	});
