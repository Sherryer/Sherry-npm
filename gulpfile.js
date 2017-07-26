var gulp=require('gulp'),  //gulp基础库
    minifycss=require('gulp-minify-css'),   //css压缩
    concat=require('gulp-concat'),   //合并文件
    uglify=require('gulp-uglify'),   //js压缩
    rename=require('gulp-rename'),   //文件重命名
    jshint=require('gulp-jshint'),   //js检查
    notify=require('gulp-notify');   //提示

gulp.task('move',function(){
    return gulp.src(['/myPackages/sherry-move/juicer-min.js'])  //选择合并的JS
        .pipe(concat('order_query.js'))   //合并js
        .pipe(gulp.dest('dist/js'))         //输出
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .pipe(gulp.dest('dist/js'))            //输出
        .pipe(notify({message:"js task ok"}));    //提示
});