/*
** Create by Administrator on 2018/10/29
*/
$(function (  ) {

    $('.subtitle-two >a').on('click',function (  ) {
        $(this).addClass('active').siblings('.subtitle-two >a').removeClass('active')
    })
   $('.subtitle >a').on('click',function (  ) {
       $(this).addClass('active').siblings('.subtitle >a').removeClass('active')
   })

    $('.content >li').on('mouseenter' ,function (  ) {
        console.log ( $ ( this ).children( ".ma" ).show () )
    })

})