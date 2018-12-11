$(function () {
    $('#cenclb').on('mouseenter' , function () {

        $('#cenclb').removeClass('cenclb')
        $('#inner').show()
        $('#cenclb').addClass('activebg')
    })
    $('#cenclb').on('mouseleave' , function () {
        if($('#playNielian').css('display')!='none'){
            $('#cenclb').addClass('cenclb').show();
            $('#cenclb').removeClass('activebg')
            $('#inner').hide()
        }
    })

    $('#dianka').on('mouseenter' , function () {
        $('#dianka').removeClass('dianka');
        $('#dianka').addClass('nielianbg')
        $('#neilian').show()
    })

    $('#dianka').on('mouseleave' , function () {
            if( $('#growGift').css('display')!='none'){
                $('#dianka').addClass('dianka');
                $('#dianka').removeClass('nielianbg')
                $('#neilian').hide()
            }
    })

    $('#dianka').on('click' ,function () {
        $('#cenclb').removeClass('activebg')
        $('#cenclb').addClass('cenclb').show()
        $('#inner').hide()
        $('#growGift').hide()
        $('#playNielian').show()
    })

    $('#cenclb').on('click' , function () {
        $('#dianka').addClass('dianka');
        $('#dianka').removeClass('nielianbg')
        $('#neilian').hide()
        $('#growGift').show()
        $('#playNielian').hide()
    })


    // var scrollbar=document.getElementById('scrollbar')
    // var scrollThumb=document.getElementById('scrollThumb')
    // var bigtu =document.getElementById('bigtu')
    // var scrollThumbTop=0;
    // var scrollbarTop=0;
    // bigtu.onmousewheel=function () {
    //     scrollThumbTop+=50;
    //     scrollbarTop+=50
    //     scrollbar.style.top=scrollThumbTop+'px'
    //     scrollThumb.style.top=scrollbarTop+'px'
    //
    // }
})

console.log(window);

