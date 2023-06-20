$(document).ready(function() {
  let menu = $('.menu-toggle');
  menu.on('click', function () {
    $(this).toggleClass('active');
  });
})