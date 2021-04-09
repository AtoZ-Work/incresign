jQuery(document).ready(function ($) {
    "use strict";


    // Youtube modal
    $('.popup-youtube, .popup-vimeo, .popup-gmaps, .ssc-pi-video').magnificPopup({
        type:'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false
    });
    //iframe scripts
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                //youtube videos
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        }
    });

    $('.image-link').magnificPopup({
        type: 'image',
        image: {
            markup: '<div class="mfp-figure">' +
            '<div class="mfp-close"></div>' +
            '<div class="mfp-img"></div>' +
            '<div class="mfp-bottom-bar">' +
            '<div class="mfp-title"></div>' +
            '<div class="mfp-counter"></div>' +
            '</div>' +
            '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

            titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            // titleSrc: function(item) {
            //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }

            verticalFit: true, // Fits image in area vertically
            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });

    $('.ssc-pi-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    //scroll to top
    $(document).ready(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#scroller').fadeIn().css({'transform': 'scale(1)', 'opacity': '1'});
            } else {
                $('#scroller').fadeOut().css({'transform': 'scale(2)', 'opacity': '0'});

            }
        });
        $('#scroller').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
    /* Sticky Top menu*/
    var $menu = $("#stickymenu");
    if($(window).width()>999){
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 ){
                $menu.addClass("fixed animated slideInDown");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed animated slideInDown")) {
                $menu.removeClass("fixed animated slideInDown");
            }
        });
    }
    // Responsive menu
    $('#myTopnav').on('click', function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    });
    /* Search Line in menu*/
    $('.open-search, .search-sbmt-close').on('click', function () {
        $('.search-block').toggleClass('opened-search');
        $('.open-search').toggleClass('opacity0');
    });
    /* Show menu container */
    $('#show').on('click', function () {
        $('.menu-container').css('top', '0');
    });
    $('#hide').on('click', function () {
        $('.menu-container').css('top', '-3000px');
    });



    /**
     * File skip-link-focus-fix.js.
     *
     * Helps with accessibility for keyboard only users.
     *
     * Learn more: https://git.io/vWdr2
     */
    ( function() {
        var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
            isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
            isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

        if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
            window.addEventListener( 'hashchange', function() {
                var id = location.hash.substring( 1 ),
                    element;

                if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                    return;
                }

                element = document.getElementById( id );

                if ( element ) {
                    if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                        element.tabIndex = -1;
                    }

                    element.focus();
                }
            }, false );
        }
    })();

});
!function (e, t, n) {
    "use strict";
    var slm_menu_li = e.getElementsByClassName('slm-mega-item slm-menu-item-depth-0');
    var len = slm_menu_li.length;
    var $menu = jQuery('#stickymenu');
    for (var i = 0, len; i < len; i++) {
        if ((getComputedStyle(slm_menu_li[i]).float == 'none' || getComputedStyle(slm_menu_li[i]).float == '') &&
            (getComputedStyle(slm_menu_li[i]).display == 'block' || getComputedStyle(slm_menu_li[i]).display == 'flex' ||
                getComputedStyle(slm_menu_li[i]).display == '' || getComputedStyle(slm_menu_li[i]).display == 'list-item' )){
            slm_menu_li[i].classList.add('slm-vertical-menu-item');
        }
    }
    t.onresize = function(event) {
        var slm_menu_li = e.getElementsByClassName('slm-mega-item slm-menu-item-depth-0');
        var len = slm_menu_li.length;
        for (var i = 0, len; i < len; i++) {
            if ((getComputedStyle(slm_menu_li[i]).float == 'none' || getComputedStyle(slm_menu_li[i]).float == '') &&
                (getComputedStyle(slm_menu_li[i]).display == 'block' || getComputedStyle(slm_menu_li[i]).display == 'flex' ||
                    getComputedStyle(slm_menu_li[i]).display == '' || getComputedStyle(slm_menu_li[i]).display == 'list-item' )){
                slm_menu_li[i].classList.add('slm-vertical-menu-item');
            } else {
                slm_menu_li[i].classList.remove('slm-vertical-menu-item');
            }
        }
    };

    [].forEach.call(e.querySelectorAll(".slm-open-menu-list"),function(b){b.addEventListener('click',function () {
        var m = b.parentNode.parentNode.getElementsByClassName('slmm-mobile-hide')[0];
        var lt = jQuery(b).offset().left;
        var rt = (jQuery(window).width() - (lt + jQuery(b).outerWidth())).toFixed();
        if(true === b.classList.contains("menu-shown")){
            m.classList.toggle("shown"), b.classList.toggle("menu-shown")
        } else {
            if(rt < lt.toFixed()){
                m.getElementsByTagName('ul')[0].style = "right: "+(-1)*(jQuery(window).width()-lt-jQuery(b).outerWidth()).toFixed()+"px;", m.classList.toggle("shown"), b.classList.toggle("menu-shown");
            }else{
                m.getElementsByTagName('ul')[0].style = "left: "+(-1)*(lt).toFixed()+"px;", m.classList.toggle("shown"), b.classList.toggle("menu-shown")
            }
        }
    },false)});
    [].forEach.call(e.querySelectorAll(".slm-search-icon"),function(b){b.addEventListener('click',function (ev) {
        ev.preventDefault();
        b.parentNode.parentNode.classList.add("no-flip");
        e.getElementsByClassName('slm-search-block')[0].classList.add('opened');
        e.getElementsByClassName('slm-search-block')[0].getElementsByClassName('slm-search-input')[0].focus();
    },false)});

    [].forEach.call(e.querySelectorAll(".slm-search-block"),function(b){b.addEventListener('click',function (e) {
        if ( 'input' !== e.target.localName) {
            b.classList.remove('opened');
        }
    },false)});


    [].forEach.call(e.querySelectorAll(".menu-item-has-children > a"),function(b){b.addEventListener('click',function (e) {
        if( jQuery(t).width() < 999 ) {
            var dr = b.parentNode.querySelector('ul');
            if(dr !== null){
                e.preventDefault();
                e.stopPropagation();
                if (dr.classList.contains("slmm-dropdown-show")) {
                    dr.classList.remove("slmm-dropdown-show");
                } else {
                    dr.classList.add("slmm-dropdown-show");
                }
            }
        }
    },false)});
    if( jQuery(t).width() >= 999 ) {
        [].forEach.call(e.querySelectorAll("[class *= menu-item]"), function (b) {
            b.addEventListener('mouseover', function () {
                b.style.zIndex = 2;
            }, false)
        });
        [].forEach.call(e.querySelectorAll("[class *= menu-item]"), function (b) {
            b.addEventListener('mouseout', function () {
                b.style.zIndex = 1;
            }, false)
        });
    }

    /* Page loading animation */
    setTimeout(function(){jQuery('.loaderbgr').fadeOut()}, 500);

}(document, window);
function ouibounce(el, config) {
    var config     = config || {},
        aggressive   = config.aggressive || false,
        sensitivity  = setDefault(config.sensitivity, 20),
        timer        = setDefault(config.timer, 1000),
        callback     = config.callback || function() {},
        cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
        cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
        sitewide     = config.sitewide === true ? ';path=/' : '',
        _html        = document.getElementsByTagName('html')[0];

    function setDefault(_property, _default) {
        return typeof _property === 'undefined' ? _default : _property;
    }

    function setDefaultCookieExpire(days) {
        // transform days to milliseconds
        var ms = days*24*60*60*1000;

        var date = new Date();
        date.setTime(date.getTime() + ms);

        return "; expires=" + date.toGMTString();
    }

    setTimeout(attachOuiBounce, timer);
    function attachOuiBounce() {
        _html.addEventListener('mouseleave', handleMouseleave);
        _html.addEventListener('keydown', handleKeydown);
    }

    function handleMouseleave(e) {
        if (e.clientY > sensitivity || (checkCookieValue('viewedOuibounceModal', 'true') && !aggressive)) return;
        fire();
        callback();
    }

    var disableKeydown = false;
    function handleKeydown(e) {
        if (disableKeydown || checkCookieValue('viewedOuibounceModal', 'true') && !aggressive) return;
        else if(!e.metaKey || e.keyCode != 76) return;

        disableKeydown = true;
        fire();
        callback();
    }

    function checkCookieValue(cookieName, value) {
        // cookies are separated by '; '
        var cookies = document.cookie.split('; ').reduce(function(prev, curr) {
            // split by '=' to get key, value pairs
            var el = curr.split('=');

            // add the cookie to fn object
            prev[el[0]] = el[1];

            return prev;
        }, {});

        return cookies[cookieName] === value;
    }

    function fire() {
        // You can use ouibounce without passing an element
        // https://github.com/carlsednaoui/ouibounce/issues/30
        if (el) el.style.display = 'block';
        disable();
    }

    function disable(options) {
        var options = options || {};

        // you can pass a specific cookie expiration when using the OuiBounce API
        // ex: _ouiBounce.disable({ cookieExpire: 5 });
        if (typeof options.cookieExpire !== 'undefined') {
            cookieExpire = setDefaultCookieExpire(options.cookieExpire);
        }

        // you can pass use sitewide cookies too
        // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
        if (options.sitewide === true) {
            sitewide = '%3bpath%3d/index.html';
        }

        // you can pass a domain string when the cookie should be read subdomain-wise
        // ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
        if (typeof options.cookieDomain !== 'undefined') {
            cookieDomain = ';domain=' + options.cookieDomain;
        }

        document.cookie = 'viewedOuibounceModal=true' + cookieExpire + cookieDomain + sitewide;

        // remove listeners
        _html.removeEventListener('mouseleave', handleMouseleave);
        _html.removeEventListener('keydown', handleKeydown);
    }

    return {
        fire: fire,
        disable: disable
    };
};

