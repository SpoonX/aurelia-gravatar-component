var gulp = require('gulp');

var tasks = ['test', 'build', 'lint']

gulp.task('watch', ['build'] , function(){
  gulp.watch('src/*', tasks);
});
