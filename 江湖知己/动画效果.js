/**
 * Created by Administrator on 2018/10/28.
 */

    //-------------人物动画显示----------------------------------------------------------


$(function () {
//点击导航标签"世界",执行的动画代码
    $(".skip1").on("click", function () {
        $(".author").animate({left: -500}, 500, "swing", function () {
            $('.author').animate({
                left: 190
            });
        });
        $(".incline").animate({right: 0}, 500, "swing", function () {
            $(".incline").animate({
                right: 550
            });
        });
    });
//点击导航标签"动作",执行的动画代码
    $(".skip2").on("click", function () {
        $(".motion").animate({right: -800}, 500, "swing", function () {
            $('.motion').animate({
                right: 0
            });
        });
        $(".incline1").animate({left: -200}, 500, "swing", function () {
            $(".incline1").animate({
                left: 650
            });
        });
    });
    //点击导航标签"音乐",执行的动画代码
    $(".skip3").on("click", function () {
        $(".musician1").animate({right: -800}, 500, "swing", function () {
            $('.musician1').animate({
                right: 0
            });
        });
        $(".incline3").animate({left: -800}, 500, "swing", function () {
            $(".incline3").animate({
                left: 0
            });
        });
        $(".icon01").css('display', 'block');
        $(".icon02").css('display', 'none');
        $(".icon03").css('display', 'none');
        $(".musician1").css('display', 'block');
        $(".musician2").css('display', 'none');
        $(".musician3").css('display', 'none');
        $(".incline4 li").css('display', 'none');
        $(".incline3 li").css('display', 'block');
        $(".incline5 li").css('display', 'none');
    });
    //刷新界面显示的动画效果.
    function showPeople() {
        $(".author").animate({left: 190}, 500, "swing");
        $(".incline").animate({right: 550}, 1000, "swing");
        $(".incline1").animate({left: 650}, 1000, "swing");
    }

    showPeople();

    //--------------------第三幕点击切换--------------

//点击第三幕人物头像1.执行的代码
    $(".song1>a").on("click", function () {
        $(".musician1").css('display', 'block');
        $(".musician1").animate({right: -800}, 500, "swing", function () {
            $('.musician1').animate({
                right: 0
            });
        });
        $(".incline3").animate({left: -800}, 500, "swing", function () {
            $(".incline3").animate({
                left: 0
            });
        });
        $(".icon01").css('display', 'block');
        $(".icon02").css('display', 'none');
        $(".icon03").css('display', 'none');
        $(".musician2").css('display', 'none');
        $(".musician3").css('display', 'none');
        $(".incline4 li").css('display', 'none');
        $(".incline3 li").css('display', 'block');
        $(".incline5 li").css('display', 'none');
    })
//点击第三幕人物头像2.执行的代码
    $(".song2>a").on("click", function () {
        $(".musician1").css('display', 'none');
        $(".musician2").css('display', 'block');
        $(".musician3").css('display', 'none');
        $(".incline3 li").css('display', 'none');
        $(".incline5 li").css('display', 'none');
        $(".incline4 li").css('display', 'block')
        $(".icon02").css('display', 'block');
        $(".icon01").css('display', 'none');
        $(".icon03").css('display', 'none');
    });
//点击第三幕人物头像3.执行的代码
    $(".song3>a").on("click", function () {
        $(".musician1").css('display', 'none');
        $(".musician2").css('display', 'none');
        $(".musician3").css('display', 'block');
        $(".incline3 li").css('display', 'none');
        $(".incline4 li").css('display', 'none');
        $(".incline5 li").css('display', 'block')
        $(".icon01").css('display', 'none');
        $(".icon02").css('display', 'none');
        $(".icon03").css('display', 'block');
    });


})


