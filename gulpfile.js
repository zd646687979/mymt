var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var minfyCSS = require("gulp-minify-css");
var imagemin = require("gulp-imagemin");

//拷贝HTML
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt"));
});
//拷贝SASS
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"));
});
//拷贝并压缩CSS
gulp.task("copy-css",function(){
	gulp.src("css/*")
	.pipe(minfyCSS())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt\\css"));
});
//拷贝并压缩JS
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt\\js"));
});
//拷贝并压缩img
gulp.task("copy-img",function(){
	gulp.src("img/*.{png,jpg,gif}")
	.pipe(imagemin())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt\\img"));
});
//监听所有
gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("css/*",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("img/*.{png,jpg,gif}",["copy-img"]);
});