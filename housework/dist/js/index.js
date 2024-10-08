$(function () {
  var obj = {
    swiper: null,
  }
  var info = [
    {
      "title": "Counting Stars",
      "cover": "assets/images/bg1.jpg",
      "desc": [
        "这首歌是乐队主唱瑞恩·泰德、碧昂斯和Jay-Z在汉普顿的时候写的。在汉普顿的第二天瑞恩·泰德醒得很早，便开始在网上搜索，寻找那些能给他的创作带来灵感的东西。最后他看到了一首叫《Counting Stars》的奇怪的歌，这首歌让瑞恩·泰德想起了他正在进行的歌曲创作，同时这首歌曲深深地震撼了他。瑞恩·泰德不喜欢这首歌的歌词与谱曲，但他喜欢它带来的的感觉，这鼓舞着瑞恩·泰德写出了新版的《Counting Stars》。原本这首歌是瑞恩·泰德给碧昂斯和她的专辑准备的，但碧昂丝觉得不能唱，所以瑞恩·泰德立刻想到了让乐队合唱的想法。"
      ]
    },
    {
      "title": "年少有为",
      "cover": "assets/images/bg2.jpg",
      "desc": [
        "《年少有为》通过“电视”、“墙板”、“热粥”这些人们日常熟悉的意象，细节描写揪心刺骨，将男人的情感压抑、撕心裂肺的痛以及无尽的悔恨等，表现得淋漓尽致。反复响起的“假如我年少有为”更是将不舍与愧疚刻画得入木三分，简单直白的词句，虐心又走心，让每个被爱伤过的人都能感受到切肤之痛。",
        "《年少有为》勾起了众多听者“想当年”的情绪，诸如“假如我年少有为不自卑，懂得什么是珍贵”、“那些美梦，没给你我一生有愧”这类平实而颇具杀伤力的歌词，瞬间击中各位人到中年的听者的内心。"
      ]
    },
    {
      "title": "See you again",
      "cover": "assets/images/bg3.jpg",
      "desc": [
        " 在《速度与激情》系列电影的主力演员保罗·沃克意外去世后，电影制作方希望通过制作一首歌曲以纪念和缅怀保罗。作为该歌曲制作人之一的查理·普斯在2014年7月写了一段基本的歌词，并将歌名取为《See You Again》，创作过程仅用时十分钟。之后在多次改动下，才有了正式版本的诞生。",
        "在创作这首歌时，查理·普斯说他自己也有一位朋友突然去世，于是写下了这首闻者落泪的歌曲 [10]  。而歌曲说唱部分则是由维兹·卡利法本人写的。在接受采访时，当记者问他为什么这首歌取得如此大成功时，维兹说这首歌虽然是为保罗·沃克创作的，但却深深打动了许多人，让他们不会仅停留在缅怀保罗·沃克的层面上。"
      ]
    }
  ];
  init();


  function init() {
    drawJson(info);
    navToggle();
    $('#skin').on('click', function () {
      toggleSkin();
    })
  }

  // swiper初始化
  function swiperInit() {
    obj.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      on: {
        slideChange: function () {
          var activeIndex = this.activeIndex;
          var item = $('.swiper-slide').eq(activeIndex);
          var cover = item.find('.cover');
          var desc = item.find('.description');
          var title = $('.swiper-slide>h2').eq(activeIndex);
          animateCSS(title, 'tada');
          animateCSS(cover, 'fadeInLeft');
          animateCSS(desc, 'fadeInRight');
        }
      },
      init: true,
      keyboard: true
    })
    return obj.swiper;
  }

  // 动画
  function animateCSS(element, animationName, callback) {
    // const node = document.querySelector(element)
    const node = element[0];
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }

  // 渲染dom
  function drawJson(info) {
    var _html = '';
    info.forEach(function (val, index, array) {
      var p = '';
      val.desc.forEach(function (valDesc) {
        p += `<p>${valDesc}</p>`;
      })
      _html += `
        <div class="swiper-slide">
          <h2>${val.title}</h2>
          <div class="item">
            <div class="cover">
              <img src="${val.cover}" alt="">
            </div>
            <div class="description">
              <p>${p}</p>
            </div>
          </div>
        </div>
      `;
    })
    $('.swiper-wrapper').html(_html);
    swiperInit();
  }

  // 切换出nav
  function navToggle() {
    var h2 = $('.swiper-wrapper h2');
    var nav = $('#nav');
    h2.on('dblclick', function (e) {
      if (nav.css('opacity') === '1') {
        animateCSS(nav, 'fadeOutRight', function () {
          nav.css({ 'opacity': 0, "display": 'none' });
        });
      } else {
        nav.css({ 'opacity': 1, "display": 'block' });
        animateCSS(nav, 'fadeInRight');
      }
    })

  }

  // 换肤
  function toggleSkin() {
    var nav = $('#nav');
    if (!nav.hasClass('sky')) {
      nav.addClass('sky');
    } else {
      nav.removeClass('sky');
    }
  }
})