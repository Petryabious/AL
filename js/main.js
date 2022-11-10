$(document).ready(function () {
  $('.menu__burger').click(function (e) { 
    $('.menu__burger, .header__menu, .header__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.ai-slider__items').slick({
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    /* mobileFirst:true, */
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });
  $(".footer__information .footer__title,.footer__footer-menu .footer__title, .footer__useful-links .footer__title").click(function (e) { 
    if ($(".footer__spoiler").hasClass("one")) {
      $(".footer__title").not($(this)).removeClass("active");
      $(".footer-menu__items").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
    
  });
});