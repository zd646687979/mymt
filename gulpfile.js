var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var minfyCSS = require("gulp-minify-css");
var imagemin = require("gulp-imagemin");

//拷贝HTML
gulp.task("copy-html",function(){
	gulp.src("*.*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt"));
});
gulp.task("copy-goods-html",function(){
	gulp.src("goods/*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt\\goods"));
});
//拷贝PHP
gulp.task("copy-php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\mymt\\php"));
});
//拷贝SASSw
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
	gulp.watch("*.*",["copy-html"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("goods/*.html",["copy-goods-html"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("css/*",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("img/*.{png,jpg,gif}",["copy-img"]);
});