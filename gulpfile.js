const gulp = require("gulp");
const spritesmith = require('gulp.spritesmith');

/*
 * npm install gulp gulp-sass gulp-imagemin gulp.spritesmith
* 雪碧图合并task( 输出到 css文件 )
* 路径一：要合并的资源路径
* return 输出路径
* gulp sprite
*/

gulp.task('sprite', function () {
  var spriteData = gulp.src('./src/assets/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./src/sprite/'));
});