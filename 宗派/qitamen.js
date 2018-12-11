
$(function (  ) {
    $('.nav>.qq').on('click',function (  ) {
        $(this).addClass('active').siblings('.nav >.qq ').removeClass('active');
        var idx = $(this).index();
        $('.show>.h').eq(idx-1).stop(true,false).fadeIn(1000).siblings('.h').stop(true,false).fadeOut(100);
    })
})