$(function(){
   'use strict';

    var windowH = $(window).height(),
        upperH  = $(".upper-bar").innerHeight(),
        navH    = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(windowH - ( upperH + navH));

    $('.featured-work ul li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class') === 'all'){
            $('.shuffle-images .col-md').css('opacity',1);
        }else {
            $('.shuffle-images .col-md').css('opacity','.1');
            $($(this).data('class')).parent().css('opacity',1)

        }
    });
});