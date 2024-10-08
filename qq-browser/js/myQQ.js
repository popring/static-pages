/*
* @Author: apple
* @Date:   2017-10-08 17:31:39
* @Last Modified by:   apple
* @Last Modified time: 2017-10-09 23:13:48
*/
$(function(){
     setTimeout(function () {
         $(".section1").addClass("comein");
     }, 100);
     $('#fullpage').fullpage({
    	// 显示项目符号
    	navigation: true,
    	// 循环滚动
    	loopBottom: true,

        onLeave:function (index, nextIndex, direction) {
    	    $(".section1").removeClass("comein");
            if (nextIndex != 1) {
                $("#bg").addClass("rotate");
            }else {
                $(".section1").addClass("comein");
                $("#bg").removeClass("rotate");
            }
            
            if (nextIndex == 2) {
                $(".p2").css({"transform": "translate(-50%, -50%) translateZ(0) scale(1)"});
            }else {
                $(".p2").css({"transform": "translate(-50%, -50%) translateZ(2000px) scale(1)"});
            }

            if (nextIndex == 3) {
                $(".p3").css("transform", "translateZ(-50px) rotateX(30deg)");
                $(".title3").css("transform", "translateZ(0) rotate(0deg)");
            }

            if (nextIndex == 4 || index == 3) {
                $(".p3").css("transform", "translateZ(-200px) rotateX(30deg) translateX(3000px)");
                $(".title3").css("transform", "translateZ(200px)  translateX(-3000px)");
            }
        },
    });
});