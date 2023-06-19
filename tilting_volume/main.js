let isProgClicking = false;
let interval;

$('.tiltProg').on('mousedown', () => {
  isProgClicking = true;
  clearInterval(interval);

  // .tiltProg를 기준으로 한 Y값 반환
  $(window).on('mousemove', (e) => { 
    if(isProgClicking) {
      const currentY = e.pageY - $('.tiltProg').offset().top;
      console.log(currentY);
      tiltStart(currentY);
    }
  });

  interval = setInterval(() => {

  });

  
});




  function tiltStart(y) {
    const tiltAmount = (y / $('.tiltProg').height()) * 360;
    $('.tiltProg').css('transform', `rotate(${tiltAmount}deg)`);
  }

  function tiltDone() {
    $('.tiltProg').css('transform', 'rotate(0deg)');
  }