$(document).ready(function () {
  $('.menu__burger').click(function (e) { 
    $('.menu__burger, .header__menu, .header__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
});