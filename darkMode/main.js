$(document).ready( () => {
  $('.radio-btn').click( () => {
    $('.radio-inner').toggleClass('active');
    $('body').toggleClass('dark');
  });
});