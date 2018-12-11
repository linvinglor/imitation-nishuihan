$(function () {
    // 大轮播图JS
    ;
    (function () {
        var index = 2; // 初始展示图片
        var TimeID;

        setTimeout(function () {
            time();
        }, 5000)

        function time() {
            clearInterval(TimeID);
            TimeID = setInterval(function () {
                index++;
                if (index == 7) {
                    $(".job-bg").eq(index - 1).addClass("leave").parent().children().eq(0).show().addClass("enter");
                    $('.job-nav>a').eq(0).addClass("active").siblings("a").removeClass("active");
                    setTimeout(function () {
                        $(".job-bg").eq(index - 1).removeClass("leave enter").hide();
                    }, 700) // 不可更改
                    index = 0;
                } else {
                    $(".job-bg").eq(index - 1).addClass("leave").next().show().addClass("enter");
                    $('.job-nav>a').eq(index).addClass("active").siblings("a").removeClass("active");
                    setTimeout(function () {
                        $(".job-bg").eq(index - 1).removeClass("leave enter").hide();
                    }, 700) // 不可更改
                }

                if (index == 2) {
                    setTimeout(function () {
                        time();
                    }, 5000)
                    clearInterval(TimeID);
                }
            }, 1000) // 轮播图更换间隔时间
        };

        // 索引点击事件
        $(".job-nav>a").click(function () {
            if (index == $(this).index()) {

            } else {
                $(this).addClass("active").siblings("a").removeClass("active");
                $(".job-bg").eq(index).addClass("leave").parent().children().eq($(this).index()).show().addClass("enter");
                var temp = index;
                index = $(this).index();
                setTimeout(function () {
                    $(".job-bg").eq(temp).removeClass("leave enter").hide();
                }, 700) // 不可更改
            }

        });

        // 移入移入事件
        $("#job-wrap").mouseenter(function () {
            clearInterval(TimeID);
        }).mouseleave(function () {
            time();
        });

        // 视频事件
        var CG = document.getElementById('CG');
        $(".video").click(function () {
            $('.pop_video').show();
            $('.pop_video_bg').show();
            // CG.currentTime = 0;
            CG.play();

        });
        $('.close_pv').click(function () {
            $('.pop_video').hide();
            $('.pop_video_bg').hide();
            CG.pause();
        });

    }());

    // 渐入渐出轮播图
    ;
    (function () {
        var index = 0;
        var TimeID = null;
        time();

        function time() {
            clearInterval(TimeID)
            TimeID = setInterval(function () {
                if (index == 6) {
                    $('.switch-pic:eq(0)').children('a').eq(index).fadeOut('slow').parent().children().eq(0).fadeIn('slow');

                    index = 0;
                } else {
                    $('.switch-pic:eq(0)').children('a').eq(index).fadeOut('slow').next().fadeIn('slow')
                    index++;
                }
                // 更换索引样式事件
                $('.switch-ctrl').children().eq(index).addClass("current").siblings('span').removeClass('current');
            }, 2000)
        }
        // 移入事件
        $('.banner').mouseenter(function () {
            clearInterval(TimeID)
        }).mouseleave(function () {
            time()
        });
        // 索引点击事件
        $('.switch-ctrl').children().click(function () {
            var temp = $(this).index();
            $('.switch-pic:eq(0)').children('a').eq(index).fadeOut('slow').parent().children().eq(temp).fadeIn('slow');
            index = temp;
            $('.switch-ctrl').children().eq(index).addClass("current").siblings('span').removeClass('current');
        })
    }());
    
    // 新闻tab栏
    ;
    (function () {
        $('.news-tab').children("li").mouseenter(function () {
            $(this).children('a').addClass('active');
            $(this).siblings('li').children('a').removeClass('active');
            console.log($('.news').eq($(this).index() + 1).addClass('active').siblings('.news').removeClass('active'));
        })
    }());

    //游戏图鉴
    ;
    (function () {
        $('.flip-item-back').hide();

        $('.media-tab').eq(0).mouseenter(function () {
            TimeID = setTimeout(function () {
                $('.flip-item-back').eq(0).show();
            }, 400) // 接近最佳视觉欺骗
        }).mouseleave(function () {
            clearTimeout(TimeID);
            setTimeout(function () {
                $('.flip-item-back').eq(0).hide();
            }, 150)
        });

        $('.media-tab').eq(1).mouseenter(function () {
            TimeID = setTimeout(function () {
                $('.flip-item-back').eq(1).show();
            }, 400)
        }).mouseleave(function () {
            clearTimeout(TimeID);
            setTimeout(function () {
                $('.flip-item-back').eq(1).hide();
            }, 150)
        });
    }());

    // 论坛栏
    ;(function () {
        $('.luntan-tab').children('a').mouseenter(function () {
            $(this).addClass('active').siblings('a').removeClass('active')
            $('.luntan-news').children('ul').eq($(this).index()).addClass('active').siblings('ul').removeClass('active');
        })
    }());
    // 顶部游戏栏
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
      });
})