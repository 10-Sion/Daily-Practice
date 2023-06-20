let isProgClicking = false;
let interval;

$('.tiltProg').on('mousedown', () => {
  isProgClicking = true;
  clearInterval(interval);

  // .tiltProg를 기준으로 한 Y값 반환
  $(window).on('mousemove', (e) => { 
    if(isProgClicking) {
      const currentY = e.pageY - $('.tiltProg').offset().top;
      console.log(currentY);    //  Y값 확인용
      tiltStart(currentY);      //  회전용 함수
      progressMovin(currentY);  //  그래프 함수


    }
  });

  $(window).on('mouseup', () => {
    isProgClicking = false;
    clearInterval(interval);

    $('.tiltProg').css('transform', 'rotate(0deg)')
    $('*').css('transition','transform .5s ease')
  })
});



  function tiltStart(y) {
    // 최대 각도의 설정
    const tiltAmount = (y / $('.tiltProg').height()) * 90;
    // 각도 변경값의 둔화  
    $('.tiltProg').css('transform', `rotate(${tiltAmount/45}deg)`);
  }

  function tiltDone() {
    $('.tiltProg').css('transform', 'rotate(0deg)');
  }

  //  현재 볼륨값 텍스트
    function progressMovin(y) {
    let valueTxt = Math.floor(y / 2)
    const currentVal = valueTxt < 0 ? 0 : (valueTxt > 100 ? 200 : y);

    $('.tiltProg').attr('value',y/2)
    $('#currentVolume').text(currentVal/2)
  }
