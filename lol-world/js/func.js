// 神兽保佑, 代码无Bug
function bless() {
    console.log(
        "%c" +
        "     ┏┛ ┻━━━━━┛ ┻┓\n" +
        "     ┃　　　　　　 ┃\n" +
        "     ┃　　　━　　　┃\n" +
        "     ┃　┳┛　  ┗┳　┃\n" +
        "     ┃　　　　　　 ┃\n" +
        "     ┃　　　┻　　　┃\n" +
        "     ┃　　　　　　 ┃\n" +
        "     ┗━┓　　　┏━━━┛\n" +
        "       ┃　　　┃   神兽保佑\n" +
        "       ┃　　　┃   代码无BUG！\n" +
        "       ┃　　　┗━━━━━━━━━┓\n" +
        "       ┃　　　　　　　    ┣┓\n" +
        "       ┃　　　　         ┏┛\n" +
        "       ┗━┓ ┓ ┏━━━┳ ┓ ┏━┛\n" +
        "         ┃ ┫ ┫   ┃ ┫ ┫\n" +
        "         ┗━┻━┛   ┗━┻━┛\n" +
        "   ━━━━━━感觉萌萌哒━━━━━━"
        , "color: #D0A511"
    );
}

//


// 底部轮播图 判断是否在第一个或最后一个图
function slideJudgment(slideIndex, parElement) {
    var length = parElement.children().length - 1;
    if (slideIndex < parElement.children().length - 1 && slideIndex > 0) {
        return true;
    }
    return false;
}


// 底部轮播图 切换时的放大缩小图片
function slideZoom(slideIndex) {
    var element = $('.light-slide-con > li')[slideIndex];

    $(element).addClass('active');
    setTimeout(function () {
        $(element).removeClass('active');
    }, 500)
}

// 渐入动画
function wFadeIn() {
    fade();

    function fade() {
        $('body>div').each(function (index, element) {
            // console.log($(this).offset().top , $(document).scrollTop());
            if ($(this).offset().top < $(document).scrollTop() + 700) {
                $(this).css('opacity', '1');
            }
        });
    }

    $(window).scroll(fade);
}