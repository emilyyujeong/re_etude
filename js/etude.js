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

    });


})