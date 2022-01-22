$(function(){

 $('.burger, .menu__link').on('click', function(){
    $('.menu, .burger').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.footer__subtitle').on('click', function(e){
$(this).toggleClass('active').next().slideToggle(300);
  })
  
});