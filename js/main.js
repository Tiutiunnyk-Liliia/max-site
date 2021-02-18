$(function (){
    $('.header-menu').on('click', function (){
        $(this).toggleClass('header-menu--active');
        $('.menu').toggleClass('menu--active');
    });
});

