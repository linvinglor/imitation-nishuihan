/*
** Create by Administrator on 2018/10/29
*/
"use strict"
nie.define ( "common", function () {
    var t = function () {
        var t = nie.require ( "nie.util.shareV5" ), a = $ ( "#share_pic" ).attr ( "src" ),
            i = $ ( "#share_title" ).html (), n = $ ( "#share_desc" ).html ()
        t ( { fat : "#Mshare", type : 1, title : i, img : a, content : n } )
    }, a = function ( t, a ) {
        nie.config.stats.url.add ( location.host + location.pathname + t, a )
    }, i = function () {
        $ ( ".wrap" ).delegate ( "[stat]", "click", function () {
            var t = $ ( this ).attr ( "stat" ), i = $ ( this ).attr ( "statname" )
            a ( t, i )
        } ), $ ( ".wrap" ).delegate ( "[datalogo]", "click", function () {
            var t = $ ( this ).attr ( "datalogo" )
            $ ( "#logo" ).hasClass ( t ) || $ ( "#logo" ).attr ( "class", t )
        } ), $ ( "#btn-audio" ).on ( "click", function () {
            $ ( this ).hasClass ( "play" ) ? ( $ ( "#audio1" )[ 0 ].pause (), $ ( this ).removeClass ( "play" ) ) : ( $ ( "#audio1" )[ 0 ].play (), $ ( this ).addClass ( "play" ) )
        } )
    }, n = function ( t, a ) {
        window.location.hash = t, a && a ()
    }, s = function ( t ) {
        $ ( ".pages" ).hide (), $ ( "#" + t ).show ()
    }, o = function () {
        t (), i ()
    }
    return { init : o, changeHash : n, bridgeAn : s }
} )