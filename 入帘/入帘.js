/*
** Create by Administrator on 2018/10/21
*/
var video = document.getElementById("starbg");
var box =document.getElementById("box")
video.addEventListener('ended', function () {
    this.style.display = 'none';
    box.style.display='block'
}, false);

$(function () {
    //需求:给tab栏的每一个li标签设置鼠标移入事件: 当前li添加active类,其他的兄弟li移除active类.
    //    找到当前tab栏索引一致的div,让他添加 selected类,其他的兄弟div移除selected类.

    $('.nav>.navs').mouseenter(function () {
        //当前鼠标移入的这个li添加active类,其他的兄弟li移除active.
        $(this).addClass('move').siblings('.navs').removeClass('move');
        //获取当前鼠标移入的这个li标签的索引.
        var idx = $(this).index();
        //让索引匹配的div添加.
        $('.contop>.feature').eq(idx).stop(true,false).fadeIn(1000).siblings('.feature').stop(true,false).fadeOut(100);
    });
});

$(function () {
    $('.zhiye').mouseenter(function (  ) {
        $(this).addClass('cheack').siblings('.zhiye').removeClass('cheack');
        //获取当前鼠标移入的这个li标签的索引.
        var idx = $(this).index();
        $('.person').eq(idx).stop(true,false).fadeIn(1000).siblings('.person').stop(true,false).fadeOut(100);

    })
});


/*领取礼包*/
$(function () {
  $('#box').on('click',function ( ) {
      $('#pop-libao-mask').show();
      $('#pop-libao').show();
  })
    $('#close').on('click',function (  ) {
        $('#pop-libao-mask').hide();
        $('#pop-libao').hide();
    })
});

$(function () {
    $('a').on('click',function ( e ) {
        e.stopPropagation()
    })
});
