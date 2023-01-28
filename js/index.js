$(function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass('fa-times');
        $('.menu').toggleClass('openmenu');
    })
    $(".projectLink").click(function(){
        $('.sub-menu').toggleClass('active');
    })
    $('.sub-menu a').click(function(){
        $('.sub-menu').addClass('active');
    })
    $(".projectLink").click(function(){
        $('.sub-menu').toggleClass('opensub-menu');
    })
});
