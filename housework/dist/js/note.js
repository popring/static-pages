$(function () {
  var dom = {
    commit: $('#commit'),
    all: $('#all'),
    reverse: $('#reverse'),
    invert: $('#invert'),
    com: $('#com'),
  }
  var note = [
    {
      "user": "Jason不失眠",
      "comments": "这俩人完全HOLD的住这首歌！"
    },
    {
      "user": "港岛妹妹没有给我西班牙馅饼",
      "comments": "有人说，听李荣浩的歌，会有一种真切的痛感，因为他的歌声里总是带着几分自嘲，几分玩笑，几分不愿向现实妥协的倔强。他有一种独特的属于自己的调调，在一些难过的夜里，李荣浩的声音很温柔。"
    },
    {
      "user": "hhhhheq",
      "comments": "上帝需要一个舞者，他叫走了迈克尔·杰克逊；上帝需要一个保镖，他叫去了李小龙；上帝需要一个杀手，拉登去了；上帝需要一位歌手，他叫走了张国荣；上帝想兜风了，他需要一位车手，保罗去了。再见，天空之上的行者，愿天堂有你爱吃的三明治，有你最爱的GTR，有你的呆萌哈士奇。速度不再，激情永存！"
    }
  ];

  init();
  btnInit();


  function init() {

    drawJson(note);

    dom.com.on('keyup', function (e) {
      if (e.keyCode === 13) {
        dom.commit.click();
      }
    })
  }

  function btnInit() {
    dom.commit.on('click', function () {
      if (dom.com.val().trim() === '') {
        alert('请填写评论');
        return;
      }
      var data = [{
        "user": "Harry",
        "comments": dom.com.val()
      }]
      drawJson(data);
      dom.com.val('');
    });
    dom.all.on('click', function () {
      $('input[type="checkbox"]').prop("checked", true);
    });
    dom.reverse.on('click', function () {
      $('input[type="checkbox"]').each(function (i, e) {
        e = $(e);
        var s = e.prop('checked');
        e.prop('checked', !s);
      })
    });
    dom.invert.on('click', function () {
      $('input[type="checkbox"]').prop("checked", false);
    });
  }

  function drawJson(data) {
    var _html = $('.comments>ul').html() || '';
    data.forEach(val => {
      _html += `
        <li>
          <p class="username">
            <span><input type="checkbox" name="${val.user}" /></span>
            <a href="javascript:;">${val.user}</a>
          </p>
          <p class="comment-content">${val.comments}</p>
        </li>
      `;
    });
    $('.comments>ul').html(_html);
  }
})