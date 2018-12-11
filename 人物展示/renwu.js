/*
** Create by Administrator on 2018/10/26
*/
$(function (  ) {
    var homeWrap =document.getElementsByClassName("homeWrap")
    var video = document.getElementById("startVideo");
    var vidiv =document.getElementById("startVideoWrap")
    video.addEventListener('ended', function () {
        this.style.display = 'none';
        vidiv.style.display='none';
        homeWrap[0].style.display='block';
    }, false);

})
$(function () {
 
    var qmSceneWrap=document.getElementById('qmSceneWrap')
    var currentleft;
    var timeID;
    $('#rightMoveHandler').on('mouseenter',function () {
        currentleft=qmSceneWrap.offsetLeft;
        timeID=setInterval(function (  ) {
            currentleft--;
            if(currentleft >= -2600){
               $('#qmSceneWrap').css('left',currentleft);
            }else{
                $('#qmSceneWrap').css('left','-2600');
                clearInterval(timeID);
            }
        },20)
        $('#rightMoveHandler').on('mouseleave',function () {
            clearInterval(timeID);
        })
    })

    $('#leftMoveHandler').on('mouseenter',function () {
        currentleft=qmSceneWrap.offsetLeft;
        timeID=setInterval(function (  ) {
            currentleft++;
            if(currentleft <= 0){
               $('#qmSceneWrap').css('left',currentleft);
            }else{
                $('#qmSceneWrap').css('left','0');
                clearInterval(timeID);
            }
        },20)
        $('#leftMoveHandler').on('mouseleave',function () {
            clearInterval(timeID);
        })
        
    })


})

$(function () {
    $('#toLeftBtn').on('click',function () {
        $('#qmSceneWrap').animate({
            left:0
        },2000)
    })
    $('#toRightBtn').on('click',function () {
        $('#qmSceneWrap').animate({
            left:'-2600px'
        },2000)
    })
})

$(function () {
    $('.point').on('mouseenter',function (){
        $(this).children('.pointInfo').show();
    })
    $('.point').on('mouseleave',function (){
        $(this).children('.pointInfo').hide();
        
    })
})


$(function(){
    var bf = document.getElementById('bgMusicBtn');
    var audio = document.getElementById('yy');
    bf.onclick = bfm;

    function bfm() {
        if (audio !== null) {
            if (audio.paused) {
                audio.play(); //audio.play();// 这个就是播放  
                bf.style.backgroundPosition = "0 0";

            } else {
                audio.pause(); // 这个就是暂停
                bf.style.backgroundPosition = "-62px 0px";
            }
        }
    }

})