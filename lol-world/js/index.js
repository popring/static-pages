$(function () {
    var slideIndex = 0;

    $('.light-slide-con').attr('slideIndex', slideIndex);

    // 左箭头
    $('.arr-left').click(function () {
        var lightSlide = $('.light-slide-con');
        var left = parseInt(lightSlide.css('left').split('px')[0]);

        slideJudgment(slideIndex, lightSlide);

        if (!(slideIndex > 0)) {
            lightSlide.css('left', -1280 * 4 + 'px');
            lightSlide.attr('slideIndex', lightSlide.children().length);
            slideIndex = lightSlide.children().length - 1;
        } else {
            lightSlide.css('left', left + 1280 + 'px');
            lightSlide.attr('slideIndex', --slideIndex);
        }


        var index = lightSlide.attr('slideIndex');
        slideZoom(index);

    });

    //右箭头
    $('.arr-right').click(function () {

        var lightSlide = $('.light-slide-con');
        var left = parseInt(lightSlide.css('left').split('px')[0]);

        if (!(slideIndex < lightSlide.children().length - 1)) {
            lightSlide.css('left', 0 + 'px');
            lightSlide.attr('slideIndex', 0);
            slideIndex = 0;
        } else {
            lightSlide.css('left', left - 1280 + 'px');
            lightSlide.attr('slideIndex', ++slideIndex);
        }

        var index = lightSlide.attr('slideIndex');
        slideZoom(index);
    });

    // 底部轮播图,每个添加放大效果
    $('.light-slide-con > li').each(function (index, element) {
        $(element).mouseenter(function () {
            $(element).addClass('active');
        });

        $(element).mouseout(function () {
            $(element).removeClass('active');
        });
    });

    // 打字效果
    // $('.inline-hover').mouseenter(function () {
    //     if ($('.nav-regions:animated')) {
    //         $('.nav-regions').stop();
    //     }
    //         $('.nav-regions').fadeIn();
    // });
    //
    // $('.inline-hover').mouseleave(function () {
    //     if ($('.nav-regions:animated')) {
    //         $('.nav-regions').stop();
    //     }
    //     $('.nav-regions').fadeOut();
    // });

    //神兽保佑
    bless();

    // 渐入动画
    wFadeIn();

    // 打字动画
    var typing = new Typing({
        source: document.getElementById('source'),
        output: document.getElementById('output'),
        delay: 120,
        done: function () {
            $('#slide-vid').css('width', '1050px');
            $('#output').css({
                'font-size': '20px',
                'top': '33%',
                'left': '70%',
                'right': 0,
            });

        }
    });
    typing.start();




    var audio;
    var body;
    $('#egg').click(function () {
        if (audio) {
            audio.pause();
        }
        audio = document.createElement('audio');
        audio.src = 'upload/mv/SeeYouAgain.mp3';
        audio.id = 'audio';
        audio.autoplay = true;

        var video = document.getElementById('slide-vid');
        video.src = 'upload/mv/video_5453436426684457895_1535265445_6213.mp4';
    });


});




