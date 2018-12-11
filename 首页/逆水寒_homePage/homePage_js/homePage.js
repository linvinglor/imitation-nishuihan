window.onload = function () {
    // 点击按钮关闭遮罩层
    var closeMask = document.getElementById('close_mask');
    var pageMask = document.getElementById('pageMask');
    var pageMaskImage = document.getElementById('pageMask_image');
    closeMask.onclick = function () {
        pageMask.style.display = "none";
        pageMaskImage.style.display = "none";
    }
    // 导航栏鼠标移入事件
    var navLi = document.getElementsByClassName('nav-li');
    var dropBox = document.getElementsByClassName('drop-box');
    for (var i = 1; i < navLi.length - 1; i++) {
        navLi[i].setAttribute("index", i - 1);
        navLi[i].onmouseover = function () {
            dropBox[this.getAttribute("index")].classList.remove("hide");
        }
        navLi[i].onmouseout = function () {
            dropBox[this.getAttribute("index")].classList.add("hide");
        }
    };

    // 控制bgmusic
    var bf = document.getElementById('btn-audio');
    var audio = document.getElementById('music1');
    bf.onclick = bfm;

    function bfm() {
        if (audio !== null) {
            if (audio.paused) {
                audio.play(); //audio.play();// 这个就是播放  
                bf.style.backgroundPosition = "-700px -146px";

            } else {
                audio.pause(); // 这个就是暂停
                bf.style.backgroundPosition = "-709px -325px";
            }
        }
    }

    function tree() {
        $('.cd-animate').addClass('show')
        setTimeout(function () {
            $('.cd-animate').hide().next().fadeIn('fast');
            $('.icon').fadeOut('fast')
            $('.code').fadeIn('fast')
        }, 1700)
    }
    window.onscroll = function () {
        if (window.pageYOffset > 2100) {
            tree();
            // tree = null;
        }
    }
}