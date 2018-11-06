$(document).ready(function() {
    var altura = $('.menustick').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menustick').addClass('menu-fixed');
        } else {
            $('.menustick').removeClass('menu-fixed');
        }
    });

});