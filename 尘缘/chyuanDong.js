var homeWrap =document.getElementsByClassName("homeWrap")
var video = document.getElementById("startVideo");
var vidiv =document.getElementById("startVideoWrap")
video.addEventListener('ended', function () {
    $(this).fadeOut();
    $(vidiv).fadeOut();
    $('.homew').fadeIn();
}, false);

//top模块切换
var top1 = document.getElementById('top1');
var top2 = document.getElementById('top2');
document.getElementById('shaspan2').onclick = function (  ) {
    $('#top1').hide();
    $('#top2').show();
}

document.getElementById('xiaspan1').onclick = function (  ) {
    $('#top1').show();
    $('#top2').hide();
}
//移入
var shaspan2 = document.getElementById('shaspan2');
var xiaspan1 = document.getElementById('xiaspan1');
var bacg1 = shaspan2.style.background;
var bacg2 = xiaspan1.style.background;
shaspan2.onmouseover = function (  ) {
    shaspan2.style.background = 'url("./img/jh-h_74614c5f.png")';
}
xiaspan1.onmouseover = function (  ) {
    xiaspan1.style.background = 'url("./img/cj-on_e76a57e3.png")';
}


//移出
shaspan2.onmouseout = function (  ) {
    shaspan2.style.background = bacg1;
}
xiaspan1.onmouseout = function (  ) {
    xiaspan1.style.background = bacg2;
}

//顶部设置
var shzhi1 = document.getElementById('shzhi1');
var shzhi2 = document.getElementById('shzhi2');
var shzhi3 = document.getElementById('shzhi3');
var shzhi4 = document.getElementById('shzhi4');
var bej1 = shzhi1.style.background;
var bej2 = shzhi2.style.background;
var bej3 = shzhi3.style.background;
var bej4 = shzhi4.style.background;
//移入
shzhi1.onmouseover = function (  ) {
    shzhi1.style.background = 'url("./img/music-h_39666919.png")';
    shzhi1.style.backgroundRepeat = "no-repeat";
}
shzhi2.onmouseover = function (  ) {
    shzhi2.style.background = 'url("./img/home-h_6f365ea7.png")';
    shzhi2.style.backgroundRepeat = "no-repeat";
}
shzhi3.onmouseover = function (  ) {
    shzhi3.style.background = 'url("./img/download-h_456a8e86.png")';
    shzhi3.style.backgroundRepeat = "no-repeat";
}
shzhi4.onmouseover = function (  ) {
    shzhi4.style.background = 'url("./img/share-h_e5bee360.png")';
    shzhi4.style.backgroundRepeat = "no-repeat";
}
//移出
shzhi1.onmouseout = function (  ) {
    shzhi1.style.background = bej1;
}
shzhi2.onmouseout = function (  ) {
    shzhi2.style.background = bej2;
}
shzhi3.onmouseout = function (  ) {
    shzhi3.style.background = bej3;
}
shzhi4.onmouseout = function (  ) {
    shzhi4.style.background = bej4;
}

//a下划线
var xihua = document.getElementsByClassName ( "xihua" );
for(var i = 0;i<xihua.length;i++){
    xihua[i].onmouseover = function (  ) {
        this.style.textDecoration = 'underline';
    }
    xihua[i].onmouseout = function (  ) {
        this.style.textDecoration = 'none';
    }
}

//top1按钮  移入点击
var anniuid = document.getElementById('anniu');
var anniubg = anniuid.style.background;
var top3 = document.getElementById('top3');
anniuid.onmouseover = function (  ) {
    anniuid.style.background = 'url("./img/enter-cj-h_8e720242.png")';
}
anniuid.onmouseout = function (  ) {
    anniuid.style.background = anniubg;
}
anniuid.onclick = function (  ) {
    $('#top1').hide();
    $('#top3').show();

}
//top2按钮 移入点击

var anniu2 = document.getElementById('anniu2');
var anniubg2 = anniu2.style.background;
var top4 = document.getElementById('top4');
anniu2.onmouseover = function (  ) {
    anniu2.style.background = 'url("./img/enter-jh-h_ac8f9c7b.png")';
}
anniu2.onmouseout = function (  ) {
    anniu2.style.background = anniubg2;
}
anniu2.onclick = function (  ) {
    $('#top2').hide();
    $('#top4').show();
}
//top3 top4 切换
var xspan3 = document.getElementById('xspan3');
var xbg3 = xspan3.style.background;
xspan3.onmouseover = function (  ) {
    xspan3.style.background = "url('./img/jh-h_74614c5f.png')";
}
xspan3.onmouseout = function (  ) {
    xspan3.style.background = xbg3;
}
xspan3.onclick = function (  ) {
    $('#top3').fadeOut();
    $('#top4').fadeIn();
}

var sspan4 = document.getElementById('sspan4');
var sbg4 = sspan4.style.background;
sspan4.onmouseover = function (  ) {
    sspan4.style.background = 'url("./img/cj-h_95b6c193.png")';
}

sspan4.onmouseout = function (  ) {
    sspan4.style.background = sbg4;
}
sspan4.onclick = function (  ) {
    top4.style.display = 'none';
    top3.style.display = 'block';
}


//top3添加选项
var one1list = document.getElementsByClassName('one1');
var mo1list = document.getElementsByClassName('mo1');
for(var i = 0;i<one1list.length;i++){
    one1list[i].setAttribute('index',i);
    one1list[i].onclick = function (  ) {
        var index = this.getAttribute('index');
        for(var j =0;j<one1list.length;j++){
            if(one1list[j] == this ){
                mo1list[j].style.display = 'block';
            }else {
                mo1list[j].style.display = 'none';
            }
        }
    }
}
var tu1 = document.getElementById('tu1');
tu1bg1 = tu1.style.background;
tu1.onmouseover = function (  ) {
    tu1.style.background = "url('./img/cj-m1-3_5a872d14.png')";
}
tu1.onmouseout = function (  ) {
    tu1.style.background = tu1bg1;
}

var tu2 = document.getElementById('tu2');
tu2bg2 = tu2.style.background;
tu2.onmouseover = function (  ) {
    tu2.style.background = "url('./img/cj-m2-3_1fddb0e5.png')";
}
tu2.onmouseout = function (  ) {
    tu2.style.background = tu2bg2;
}

var tu3 = document.getElementById('tu3');
tu3bg3 = tu3.style.background;
tu3.onmouseover = function (  ) {
    tu3.style.background = "url('./img/cj-m3-3_226c6a01.png')";
}
tu3.onmouseout = function (  ) {
    tu3.style.background = tu3bg3;
}

var tu4 = document.getElementById('tu4');
tu4bg4 = tu4.style.background;
tu4.onmouseover = function (  ) {
    tu4.style.background = "url('./img/cj-m4-3_f9515d23.png')";
}
tu4.onmouseout = function (  ) {
    tu4.style.background = tu4bg4;
}

var tu5 = document.getElementById('tu5');
tu5bg5 = tu5.style.background;
tu5.onmouseover = function (  ) {
    tu5.style.background = "url('./img/cj-m5-2_3905912f.png')";
    tu5.style.backgroundSize ='100% 100%';
}
tu5.onmouseout = function (  ) {
    tu5.style.background = tu5bg5;
}
tu5.onclick = function (  ) {
    top3.style.display = 'none';
    top1.style.display = 'block';
}

//top4选项
var tuxia2li = document.getElementsByClassName('tuxia2');
var do2li = document.getElementsByClassName('do2');
for(var i = 0;i<tuxia2li.length;i++){
    tuxia2li[i].setAttribute('index',i);
    tuxia2li[i].onclick = function (  ) {
        var index = this.getAttribute('index');
        for(var j =0;j<tuxia2li.length;j++){
            if(tuxia2li[j] == this ){
                do2li[j].style.display = 'block';
            }else {
                do2li[j].style.display = 'none';
            }
        }
    }
}

var ti1 = document.getElementById('ti1');
ti1bg1 = ti1.style.background;
ti1.onmouseover = function (  ) {
    ti1.style.background = "url('./img/jh-m1-3_d832ff3a.png')";
}
ti1.onmouseout = function (  ) {
    ti1.style.background = ti1bg1;
}

var ti2 = document.getElementById('ti2');
ti2bg2 = ti2.style.background;
ti2.onmouseover = function (  ) {
    ti2.style.background = "url('./img/jh-m2-3_4d88cd2f.png')";
}
ti2.onmouseout = function (  ) {
    ti2.style.background = ti2bg2;
}


var ti3 = document.getElementById('ti3');
ti3bg3 = ti3.style.background;
ti3.onmouseover = function (  ) {
    ti3.style.background = "url('./img/jh-m3-3_4eafe44f.png')";
}
ti3.onmouseout = function (  ) {
    ti3.style.background = ti3bg3;
}

var ti4 = document.getElementById('ti4');
ti4bg4 = ti4.style.background;
ti4.onmouseover = function (  ) {
    ti4.style.background = "url('./img/jh-m4-3_451e8cb3.png')";
}
ti4.onmouseout = function (  ) {
    ti4.style.background = ti4bg4;
}




var ti5 = document.getElementById('ti5');
ti5bg5 = ti5.style.background;
ti5.onmouseover = function (  ) {
    ti5.style.background = "url('./img/cj-m5-2_3905912f.png')";
    ti5.style.backgroundSize ='100% 100%';
}
ti5.onmouseout = function (  ) {
    ti5.style.background = ti5bg5;
}
ti5.onclick = function (  ) {
    top4.style.display = 'none';
    top2.style.display = 'block';
}