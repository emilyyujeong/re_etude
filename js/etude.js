$(function () {
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

    $(window).on('scroll', function () {
        console.log('스크롤:', $(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');

        } else {
            $('#header').removeClass('on');
        }
    });


    $('.lnear_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        variableWidth: true,
        cssEase: 'linear',
        speed: 9000,
        centerMode: true,
        easing: 'linear'

    })

    $('.wn_slide').slick({
        arrows: false,
        slidesToShow: 4,
    });

    $('.whatsnew .arrows i:nth-child(1)').on('click', function () {
        $('.wn_slide').slick('slickPrev')
    });
    $('.whatsnew .arrows i:nth-child(2)').on('click', function () {
        $('.wn_slide').slick('slickNext')
    });


    $('.sns_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
    });

    $('.news_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
    });

    $('.news .arrows i:nth-child(1)').on('click', function () {
        $('.news_slide').slick('slickPrev')
    });
    $('.news .arrows i:nth-child(2)').on('click', function () {
        $('.news_slide').slick('slickNext')
    });


    $(Window).on('scroll', function () {
        var scr = $(window).scrollTop();
        if (scr > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }

    });


    $('#toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })


})