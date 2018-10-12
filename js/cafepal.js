$(document).ready(function ($) {
    $('.scroll').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    $('header li a').click(function(){
        $('header li').removeClass('is-current');
        $(this).parent('li').addClass('is-current');
    });
    $('#hero p a').click(function(){
        $('header li').removeClass('is-current');
        $('header li:nth-child(2)').addClass('is-current');
    });
    $('[data-cafeview-label]').click(function(){
        $('[data-cafeview-label]').removeClass('current').find('.screen').fadeOut();
        $(this).addClass('current').find('.screen').fadeIn();
    });
    /* ==========================================
    scrollTop() >= 300
    Should be equal the the height of the header
    ========================================== */
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});
