$(function(){
  $('.header__social-btn').on('click', function () {
    $('.header__social-menu').toggleClass('header__social-menu--active');
  });
  $('.header__social-menu-btn-close').on('click', function () {
    $('.header__social-menu').removeClass('header__social-menu--active');
  });
});