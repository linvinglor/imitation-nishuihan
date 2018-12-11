$(function () {
  ;
  (function () {
    // 头部导航小轮播
    var n = 0;
    var getAdTimeID = null;
    getAdTimeID = getAdLun();
    $('.getAd a').mouseenter(function () {
      clearInterval(getAdTimeID);
    })
    $('.getAd a').mouseleave(function () {
      getAdTimeID = getAdLun();
    })
    // 显示/隐藏网易全部游戏
    $('.topBar').mouseenter(function () {
      $(this).addClass('topBar-hover');
      $('#NIE-topBar-menu').addClass('NIE-topBar-menu-hover');
    })
    $('.topBar').mouseleave(function () {
      $(this).removeClass('topBar-hover');
      $('#NIE-topBar-menu').removeClass('NIE-topBar-menu-hover');
    })
    // 展开/隐藏 更多热门端游
    $('#NIE-topBar-more-pc').click(function () {
      //156px  325px
      if ($(this).text() === "更多热门端游") {
        $(this).text("<<").addClass('open')
            .parent().css({
          left: 325
        })

      } else {
        $(this).text("更多热门端游").removeClass('open')
            .parent().css({
          left: 156
        })

      }
    })
    //  展开/隐藏 更多热门手游
    $("#NIE-topBar-more-mobi").click(function () {
      //156px  325px
      if ($(this).text() === "更多热门手游") {
        $(this).text("<<");
        $('#NIE-table').addClass("moreAni");
      } else {
        $(this).text("更多热门手游");
        $('#NIE-table').removeClass("moreAni");
      }

    })
    /** 头部导航小轮播
     * @param { }
     * @returns { getAdTimeID:定时器ID }
     */
    function getAdLun() {

      var getAdTimeID = setInterval(function () {
        if (n === $('.getAd a').length - 1) {
          n = 0;
          $('.getAd').css({
            top: 0
          })
        }
        n++;
        $('.getAd').stop(true, false).animate({
          top: -52 * n
        }, 500)
      }, 1000)
      return getAdTimeID
    }
  }());
  $(".nav-li").mouseenter(function () {
    $(this).children("ul.drop-box").css("opacity","1").show();
  });
  $(".nav-li").mouseleave(function () {
    $(this).children("ul.drop-box").css("opacity","1").hide();
  });
});
