
$(function(){

  // $("a[href^='#']").click(function(){
  //   var _href = $(this).attr("href");
  //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 2000);
  //   return false;
  // });


  $('.header__burger, menu').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__burger').toggleClass('header__burger--active');
    $('body').toggleClass('lock');
  });

  
  $('.header-slider').slick({
    dots: true,
    swipe: false,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/icons/slider-arrow-left.svg" alt="prev"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/icons/slider-arrow-right.svg" alt="next"></button>',

  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,

    responsive: [{

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // vertical: true,
        swipe: true,
      }
      
    }]
  });

  $('.reviews__slider').on('swipe', function(event, slick, direction){
    console.log(bottom);
    // left
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 100) {
      $(".header__top").addClass("header--scroll");
    } else {
      $(".header__top").removeClass("header--scroll");
    }
  });

  
});

