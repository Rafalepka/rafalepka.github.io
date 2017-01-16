$(function () {
    
    
    if ($(window).scrollTop() >= 50) {

        $('#main_nav, .navbar-brand').addClass('scroll')


    } else {
        $('#main_nav, .navbar-brand').removeClass('scroll')

    }
});

$(window).scroll(function () {

    if ($(window).scrollTop() >= 50) {

        $('#main_nav, .navbar-brand').addClass('scroll')


    } else {
        $('#main_nav, .navbar-brand').removeClass('scroll')

    }
});


var root = $('html, body');
$('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    root.animate({
        scrollTop: $(href).offset().top - 52
    }, 500);
});