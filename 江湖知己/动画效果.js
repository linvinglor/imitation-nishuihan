/**
 * Created by Administrator on 2018/10/28.
 */

    //-------------���ﶯ����ʾ----------------------------------------------------------


$(function () {
//���������ǩ"����",ִ�еĶ�������
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
//���������ǩ"����",ִ�еĶ�������
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
    //���������ǩ"����",ִ�еĶ�������
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
    //ˢ�½�����ʾ�Ķ���Ч��.
    function showPeople() {
        $(".author").animate({left: 190}, 500, "swing");
        $(".incline").animate({right: 550}, 1000, "swing");
        $(".incline1").animate({left: 650}, 1000, "swing");
    }

    showPeople();

    //--------------------����Ļ����л�--------------

//�������Ļ����ͷ��1.ִ�еĴ���
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
//�������Ļ����ͷ��2.ִ�еĴ���
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
//�������Ļ����ͷ��3.ִ�еĴ���
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


