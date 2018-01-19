//
//点击搜索  动画函数
function navSacle(){
	$("#searchBtn").click(function(){
		let lichild1 = $(".lichild1");
		let scaleNum = 1;
		let scaleSpace=0.01;
		let myTimer = setInterval(function(){
		
		if(scaleNum<=0.7){
			lichild1.css({display:"none"});
			$(".searchDiv").css({display:"block"});
			$("#searchText").focus();
			clearInterval(myTimer);
		}
		lichild1.css({
			transform:"scale("+scaleNum+")"
		})
		scaleNum=scaleNum-scaleSpace;
		},10);
	});
	$("#searchMask,.fastLink,#closeSearch,.searchTitle").click(function(){
		$(".searchDiv").css({display:"none"});
		let lichild1 = $(".lichild1");
		lichild1.css({display:"block"});
		let scaleNum = 0.7;
		let scaleSpace=0.01;
		let myTimer = setInterval(function(){
		if(scaleNum>=1){
			clearInterval(myTimer);
		}
		lichild1.css({
			transform:"scale("+scaleNum+")"
		})
		scaleNum+=scaleSpace;
		},10);
	});
}
//
//点击我的菜单函数
function showMy(){
	$("#nav").on("click","#mineBtn",function(event){
		$("#mybox").css({display:"block"});
	});
	myBlur("mybox");	
}
$(function(){
	//调用搜索框 控制 导航栏缩小动画
	navSacle();
	//调用展示，关闭  我的菜单动画
	showMy();
});

/**轮播图
 * Author         : CheneyLiu
 * Date           : date
 * isAuto:        true, 自动播放
 * transTime:     3000, 自动播放间隔
 * animateSpeed:  1000,  动画速度
 * sliderMode:    'slide', 类型//'slide | fade',
 * pointerControl: true, 指示器开关
 * pointerEvent:  'click', 指示器类型//'hover' | 'click',
 * arrowControl:  true, 左右控制
 */
;(function($) {
$.fn.Slider = function(options) {
  "use strict";
  var settings = $.extend({
    isAuto: true,
    transTime: 5000,
    animateSpeed: 1000,  
    sliderMode: 'slide', //'slide | fade',
    pointerControl: true,
    pointerEvent: 'click',//'hover' | 'click',
    arrowControl: true,
  }, options);
  var interval;
  var isAnimating     = false;
  var $slider         = $(this);
  var $sliderWrap     = $slider.find('.slider-inner');
  var sliderCount     = $sliderWrap.find('> .item').length;
  var sliderWidth     = $slider.width();
  var currentIndex    = 0;

  var sliderFun = {
    controlInit: function() {
      // pointerControl
      if (settings.pointerControl) {
        
        var html = '';
        html += '<ol class="slider-pointer">';
        for (var i = 0; i < sliderCount; i++) {
          if (i == 0) {
            html += '<li class="active"></li>'
          }else{
            html += '<li></li>'
          }
        }
        html += '</ol>'
        $slider.append(html);
          // 指示器居中
        var $pointer = $slider.find('.slider-pointer');
        $pointer.css({
          left: '50%',
          marginLeft: - $pointer.width()/2
        });
      }
      // pointerControl
      if (settings.arrowControl) {
        var html = "";
        html += '<div class="slider-control prev"></div>';
        html += '<div class="slider-control next"></div>'
        $slider.append(html);
      }
      $slider.on('click', '.slider-control.prev', function(event) {
        sliderFun.toggleSlide('prev');
      });
      $slider.on('click', '.slider-control.next', function(event) {
        sliderFun.toggleSlide('next');
      });
    },
    // slider
    sliderInit: function() {
      sliderFun.controlInit();
      // 模式选择
      if (settings.sliderMode == 'slide') {
        // slide 模式
        $sliderWrap.width(sliderWidth * sliderCount);
        $sliderWrap.children().width(sliderWidth);
      }else{
        // mode 模式
        $sliderWrap.children().css({
          'position': 'absolute',
          'left': 0,
          'top': 0,
          'border':0
        });
        $sliderWrap.children().first().siblings().hide();
      }
      // 控制事件
      if (settings.pointerEvent == 'hover') {
        $slider.find('.slider-pointer > li').mouseenter(function(event) {
          sliderFun.sliderPlay($(this).index());
        });
      }else{
        $slider.find('.slider-pointer > li').click(function(event) {
          if (currentIndex != $(this).index()) {
				sliderFun.sliderPlay($(this).index())
			}
        });
      }
      // 自动播放
      sliderFun.autoPlay();
    },
    // slidePlay
    sliderPlay: function(index) {
      sliderFun.stop();
      isAnimating = true;
      $sliderWrap.children().first().stop(true, true);
      $sliderWrap.children().stop(true, true);
      $slider.find('.slider-pointer').children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
      if (settings.sliderMode == "slide") {
        // slide
        if (index > currentIndex) {
          $sliderWrap.animate({
        left: '-=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
    }, settings.animateSpeed, function() {
        sliderFun.stop();
        isAnimating = false;
        sliderFun.autoPlay()
    });
        } else if (index < currentIndex) {
          $sliderWrap.animate({
            left: '+=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
          }, settings.animateSpeed, function() {
            isAnimating = false;
            sliderFun.autoPlay();
          });
        } else {
          return;
        }
      }else{
        // fade
        if ($sliderWrap.children(':visible').index() == index) return;
        $sliderWrap.children().fadeOut(settings.animateSpeed)
          .eq(index).fadeIn(settings.animateSpeed, function() {
            isAnimating = false;
            sliderFun.autoPlay();
          });
      }
      currentIndex = index;
    },
    // toggleSlide
    toggleSlide: function(arrow) {
      if (isAnimating) {
        return;
      }
      var index;
      if (arrow == 'prev') {
        index = (currentIndex == 0) ? sliderCount - 1 : currentIndex - 1;
        sliderFun.sliderPlay(index);
      }else if(arrow =='next'){
        index = (currentIndex == sliderCount - 1) ? 0 : currentIndex + 1;
        sliderFun.sliderPlay(index);
      }
    },
    // autoPlay
    autoPlay: function() {
      if (settings.isAuto) {
        interval = setInterval(function () {
          var index = currentIndex;
          (currentIndex == sliderCount - 1) ? index = 0: index = currentIndex + 1;
          sliderFun.sliderPlay(index);
        }, settings.transTime);
      }else{
        return;
      }
    },
    //stop
    stop: function() {
      clearInterval(interval);
    },
  };
  sliderFun.sliderInit();
}
})(jQuery);

jQuery(document).ready(function($) {
  $('#slider').Slider();
});
