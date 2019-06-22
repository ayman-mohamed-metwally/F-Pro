/*global $, window*/
$(function () {
    'use strict';

    // the loader
    $('.loader .spinner').fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });


    // up button
    $(".up").click(function () {
        $("html, body").animate({scrollTop: "0"}, 3000);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1672) {

            $(".up").fadeIn(2000);
        } else {

            $(".up").fadeOut(1000);
        }
    });


    //nicescroll
    $('html').niceScroll({
        cursorcolor: $('.main-color').css('color'),
        cursorwidth: "15px",
        cursorborder: "1px solid #dc3545",
        scrollspeed: "20",
        zindex: "9999999"
    });

    // activate navbar links
    $('.red-hover').on('click', function () {
        $(this).parent().siblings().children().removeClass('selected');
        $(this).addClass('selected');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 621) {
            $('.navbar')
                .removeClass('no-color')
                .addClass('half-black')
                .mouseenter(function () {
                    $(this).addClass('black').removeClass('half-black');
                }).mouseleave(function () {
                    $(this).addClass('half-black').removeClass('black');
                });
        } else {
            $('.navbar').addClass('no-color').removeClass('half-black', 'black');
        }
    });

    if ($(window).outerWidth() < 992) {
        $('.nav-link')
            .removeClass('red-hover', 'selected')
            .mouseenter(function () {
                $(this).css('color', 'red');
            }).mouseleave(function () {
                $(this).css('color', 'white');
            });
    }

    // fit-text
    $('h2').fitText(2, {
        minFontSize: '20px'
    });

    // search box
    $('.search').on('click', function () {
        $('.popup-search').fadeIn();
        $('.popup-search .inner-popup').slideDown();
    });
    $('.popup-search').click(function () {
        $('.popup-search .inner-popup').slideUp();
        $(this).fadeOut();
        $('.search').removeClass('selected');
    });
    $('.inner-popup').click(function (e) {
        e.stopPropagation();
    });
    $(window.document).keydown(function (e) {
        if (e.keyCode === 27) { // escape button key-code
            $('.popup-search .inner-popup').slideUp();
            $('.popup-search').fadeOut();
            $('.search').removeClass('selected');
        }
    });
    $('.inner-popup .close-popup i').click(function (e) {
        e.preventDefault();
        $('.popup-search .inner-popup').slideUp();
        $(this).parents('.popup-search').fadeOut();
        $('.search').removeClass('selected');
    });

    // sgin-in box
    $('.sign-in').on('click', function () {
        $('.popup-sign-in').fadeIn();
    });
    $('.popup-sign-in').click(function () {
        $(this).fadeOut();
        $('.sign-in').removeClass('selected');
    });
    $('.inner-popup').click(function (e) {
        e.stopPropagation();
    });
    $(window.document).keydown(function (e) {
        if (e.keyCode === 27) { // escape button key-code
            $('.popup-sign-in').fadeOut();
            $('.sign-in').removeClass('selected');
        }
    });
    $('.inner-popup .close-popup i').click(function (e) {
        e.preventDefault();
        $(this).parents('.popup-sign-in').fadeOut();
        $('.sign-in').removeClass('selected');
    });

    // slider-header
    if ($(window).outerWidth() < 514) {
        $('.iner-header').css('display', 'none');
    }

    // section products
    $('.product .card').mouseenter(function () {
        $(this).children('.over-lay').slideDown();
    });
    $('.product .card').mouseleave(function () {
        $(this).children('.over-lay').slideUp();
    });

    // section supliers
    $('.suplier .card').mouseenter(function () {
        $(this).children('.over-lay').fadeIn();
    });
    $('.suplier .card').mouseleave(function () {
        $(this).children('.over-lay').fadeOut();
    });

    // footer
    if ($(window).outerWidth() < 514) {
        $('footer .container .row').children('.col').addClass('col-12');
        $('footer .socila-media').css({
            'marginBottom': '20px',
            'marginLeft': '25%'
        });
    }
});
