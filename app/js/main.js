$(function(){

  $('.modal-btn').click(function() {
    $('.popup').fadeIn();
    $('.popup-overlay').fadeIn();
  });

  $('.popup__close').click(function() {
    $('.popup').fadeOut();
    $('.popup-overlay').fadeOut();
  });

  $("a[href^='#']").click(function(){
    let target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top-108
      }, 500);
  });
 

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
        swipe: true,
      }
      
    }]
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 100) {
      $(".header__top").addClass("header--scroll");
    } else {
      $(".header__top").removeClass("header--scroll");
    }
  });

  new WOW().init();

   
});

