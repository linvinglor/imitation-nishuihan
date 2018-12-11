/*
** Create by Administrator on 2018/10/29
*/
"use strict"
! function ( e, t ) {
    "function" == typeof define && define.amd ? define ( t ) : "object" == typeof exports ? module.exports = t () : e.resLoader = t ( e )
} ( window, function () {
    function e ( e ) {
        if ( this.option = {
                resourceType : "image",
                baseUrl : "./",
                resources : [],
                onStart : null,
                onProgress : null,
                onComplete : null
            }, ! e ) return void alert ( "\u53c2\u6570\u9519\u8bef\uff01" )
        for ( var t in e ) this.option[ t ] = e[ t ]
        this.status = 0, this.total = this.option.resources.length || 0, this.currentIndex = 0
    }

    var t = function ( e ) {
        return "function" == typeof e
    }
    return e.prototype.start = function () {
        this.status = 1
        for ( var e = this, n = this.option.baseUrl, o = 0, s = this.option.resources.length ; s > o ; o ++ ) {
            var i = this.option.resources[ o ], p = ""
            p = 0 === i.indexOf ( "http://" ) || 0 === i.indexOf ( "https://" ) ? i : n + i
            var a = new Image
            a.onload = function () {
                e.loaded ()
            }, a.onerror = function () {
                e.loaded ()
            }, a.src = p
        }
        t ( this.option.onStart ) && this.option.onStart ( this.total )
    }, e.prototype.loaded = function () {
        t ( this.option.onProgress ) && this.option.onProgress ( ++ this.currentIndex, this.total ), this.currentIndex === this.total && t ( this.option.onComplete ) && this.option.onComplete ( this.total )
    }, e
} ), $ ( function () {
    nie.config.copyRight.setWhite ()
} )
var isFromIndex = ! 1, isScroll = ! 1, global_hash = "xuehe"
nie.define ( "main", function () {
    function e ( e ) {
        var t = e.mp4, n = e.hmp4, o = e.smp4, i = e.width || 950, p = e.height || 520,
            a = ( $ ( window ).height () - p ) / 2
        $ ( "#pop_vv" ).length || $ ( [ "<div class=\"pop_video_bg\" style=\"height:" + $ ( "body" ).height () + "px;\"></div>", "<div class=\"pop_video\" style=\"margin-left:-" + i / 2 + "px;width:" + i + "px;height:" + p + "px;top:" + a + "px;\">", "<div id=\"pop_vv\"></div>", "<a class=\"close_pv\" href=\"javascript:void(0)\" class=\"btn_close\">x</a>", "</div>" ].join ( "" ) ).appendTo ( $ ( "body" ) ), $ ( ".pop_video" ).show ( "fast", function () {
            $ ( this ).css ( "overflow", "visible" )
        } ), s ( {
            fat : "#pop_vv",
            width : i,
            height : p,
            wmode : "window",
            movieUrl : t,
            HDmovieUrl : n,
            SHDmovieUrl : o,
            vtype : "hd",
            autoPlay : ! 0
        } )
    }

    var t = [ "https://n.res.netease.com/pc/zt/20180621163536//img/job/ability_46c0bc5.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/index-icon_1f28e14.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/jiuling-bg_69e4c6e.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/jiuling-name_236141b.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/jiuling-person_b246b97.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/logo_6192982.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/ability_c78a035.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/bg_dd9755c.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/cover_fc5c5ad.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/cover2_bfc34a7.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/displacement_5bc5db1.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/drag-bg_1612ab2.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/drag-btn_b7b2ce9.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/drag-video-cover_7f0e40f.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/index-icon_cef722c.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/logo_28d0be6.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/modal-close_9a727d3.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/name_3213610.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/nav-1_c58b49a.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/nav-2_2070e26.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/nav_d01b1ca.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/play-icon_beae01d.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/role-bg_37ad868.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/role-blur_82b441e.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/role_b635812.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/role2_bf7a074.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/school_705e2b5.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/video-icon-default_9bc30f5.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/video-no-data-modal_e6ec71a.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/000_e290cc4.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/001_c547e13.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/002_df07dff.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/003_ffd6fc6.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/004_95f9d52.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/005_a87ae3e.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/006_c4efd5e.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/007_caaa309.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/008_102acf7.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/009_9be0c1b.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/010_bf3316e.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/011_44f244d.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/012_fbb7cd5.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/013_e61e538.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/014_953dd40.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/015_7de12af.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/016_de84fb4.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/017_3b2d69b.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/longyin/weapon-sprite/018_78b3677.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/main-nav_5a72013.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/school_4771241.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/shenxiang-bg_689e69d.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/shenxiang-name_9a85a35.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/shenxiang-person_eb6651f.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suimeng-bg_cf336c3.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suimeng-name_b6779e2.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suimeng-person_4685044.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suwen-bg_9b31741.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suwen-name_ba34f19.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/suwen-person_f6a55df.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/tieyi-bg_96e3716.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/tieyi-name_bdf665f.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/tieyi-person_640c50e.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/video-btn_28b684c.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/video_a3885d9.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/xuehe-bg_b7e8f8d.jpg", "https://n.res.netease.com/pc/zt/20180621163536//img/job/xuehe-name_81c3734.png", "https://n.res.netease.com/pc/zt/20180621163536//img/job/xuehe-person_97f1436.png" ],
        n = new resLoader ( {
            resources : t, onStart : function () {
            }, onProgress : function () {
            }, onComplete : function () {
            }
        } )
    n.start ()
    var o = nie.require ( "common" )
    o.init ()
    var s = nie.require ( "nie.util.videoV2" ),
        i = { xuehe : "xh", suwen : "sw", jiuling : "jl", shenxiang : "sx", tieyi : "ty", suimeng : "sm" },
        p = window.location.hash.split ( "#" )[ 1 ] && i[ window.location.hash.split ( "#" )[ 1 ] ] ? window.location.hash.split ( "#" )[ 1 ] : "xuehe"
    global_hash = p, window.location.hash !== global_hash && ( window.location.hash = global_hash ), window.location.hash.split ( "#" )[ 1 ] ? ( $ ( ".show>div" ).removeClass ( "isshow" ).addClass ( "hide" ), $ ( "." + i[ p ] ).removeClass ( "hide" ).addClass ( "isshow" ).fadeIn ( 300 ), $ ( ".nav a" ).removeClass ( "active" ), $ ( "[stat=\"" + p + "\"]" ).addClass ( "active" ), $ ( ".show" ).find ( "." + i[ p ] ).find ( ".video-wrap video" ).get ( 0 ).play () ) : window.location.hash = global_hash, $ ( window ).on ( "hashchange", function () {
        if ( i[ window.location.hash.split ( "#" )[ 1 ] ] ) {
            var e = window.location.hash.split ( "#" )[ 1 ] || "xuehe", t = $ ( this ), n = "." + i[ e ],
                o = $ ( ".isshow" )
            t.hasClass ( "active" ) || ( o.animate ( { opacity : 0 }, 400, function () {
                o.removeClass ( "isshow" ).hide ().css ( "opacity", 1 ), $ ( ".show .video-wrap video" ).each ( function ( e, t ) {
                    $ ( t ).attr ( "data-src", $ ( t ).attr ( "src" ) )
                } )
            } ), $ ( ".show" ).find ( n ).removeClass ( "hide" ).addClass ( "isshow" ).fadeIn ( 300 ), $ ( ".show" ).find ( n ).find ( ".video-wrap video" ).get ( 0 ).play (), $ ( ".nav a" ).removeClass ( "active" ), $ ( "[stat=\"" + e + "\"]" ).addClass ( "active" ), global_hash = e )
        }
    } ), $ ( ".show .cover" ).unbind ( "click" ).bind ( "click", function ( t ) {
        t.stopPropagation ()
        var n = $ ( this ).attr ( "data-mp4" ), o = $ ( this ).attr ( "data-hmp4" ),
            s = $ ( this ).attr ( "data-smp4" ), i = $ ( this ).attr ( "data-size" ), p = i && i.split ( "," ) || [],
            a = p[ 0 ] || 1200, c = p[ 1 ] || 678
        e ( {
            mp4 : n,
            hmp4 : o,
            smp4 : s,
            width : a,
            height : c
        } ), $ ( "#btn-audio" ).hasClass ( "play" ) && ( $ ( "#audio1" )[ 0 ].pause (), $ ( "#btn-audio" ).removeClass ( "play" ) )
    } ), $ ( "body" ).delegate ( ".close_pv,.pop_video_bg", "click", function () {
        var e = $ ( ".pop_video_bg, .pop_video" )
        e.fadeIn ( function () {
            e.remove ()
        } )
    } )
} )