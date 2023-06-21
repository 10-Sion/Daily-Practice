/*
  주제 : Show & Hide 로그인폼 만들기
  
  - 화면상단에 [로그인]버튼을 눌렀을때, 화면 상단 바깥에 숨겨져 있던
  로그인 폼이 위에서 내려와 화면에 나타나도록 만들자.

  -그리고 로그인 폼에 [close(닫기)]버튼을 눌렀을때는 
  폼이 다시 화면 상단 바깥으로 이동되어 숨겨지도록 만들자.
  
  -또한 로그인 폼의 아이디 및 비밀번호 입력 요소에 안내가이드도 만들자
  */
// 로그인 폼: common.css  left -110px / top -500px

// const $loginBtn = $('.login_wrap #loginImg');
const $loginBtn = $('#loginImg');

//  로그인 버튼 나타남
$loginBtn.on('click', () => {
  $('#login_f').animate(
    {
      left: '-110px',
      top: '30px',
    },
    200
  );

  // 로그인 창 닫기
  const $CloseBtn = $('#loginCloseBtn');
  const $logBtn = $('.log_btn');

  function loginClose() {
    $('#login_f').animate(
      {
        left: '-110px',
        top: '-500px',
      },
      200
    );
  }

  $CloseBtn.on('click', loginClose);
  $logBtn.on('click', loginClose);

  // 아이디 비번 이미지 처리
  const $idImg = $('.user_id label img');
  const $pwImg = $('.user_pw label img');

  $idImg.on('click', idClick);
  $('#user_id').on('click', idClick);

  $pwImg.on('click', pwClick);
  $('#user_pw').on('click', pwClick);

  // focus, 입력값 유무에 따른 처리
  function idClick() {
    if ($('#user_id').val().trim() === '') {
      $idImg.addClass('hide');
    } else {
      $idImg.removeClass('hide');
    }
  }

  function pwClick() {
    if ($('#user_pw').val().trim() === '') {
      $pwImg.addClass('hide');
    } else {
      $pwImg.removeClass('hide');
    }
  }

  $('#user_id').on('focus', idClick);
  $('#user_id').on('focusout', function () {
    if ($('#user_id').val().trim() === '') {
      $idImg.removeClass('hide');
    }
  });

  $('#user_pw').on('focus', pwClick);
  $('#user_pw').on('focusout', function () {
    if ($('#user_pw').val().trim() === '') {
      $pwImg.removeClass('hide');
    }
  });
});

//-----------------------------------------------------------------------------------------------------

/*
  주제 :  ZOOM 버튼 만들기
  [+]를 클릭하면 화면이 확대 되고,
  [-]를 클릭하면 화면이 축소 됩니다.
  그리고 [100]을 눌렀을때는 원래 100%사이즈로 되돌리도록 만들기
  
  참고 : zoom 버튼을 클릭 했을때 화면 확대/축소를 적용하기 위해서는 
      CSS속성중에 zoom속성과 transform의 scale속성 사용법을 잘 알고 있어야 합니다.
      
      이때 웹브라우저 마자 CSS속성이 모두 정상적으로 작동하지 않으므로 구분해서 사용 해야 하는데,
      zoom속성의 경우에는 현재 파이어폭스를 제외한 모든 브라우저에서 지원하고 있습니다.
      
      그리고 transform의 scale속성은 현재 IE8 이하를 제외한 모든 브라우저에서 지원 하고 있습니다.
  
      1.제이쿼리의 zoom속성 사용법
        문법-> $(요소선택).css("zoom", "확대비율%");
        
        예-> $("body").css("zoom","200%");
          //<body>영역의 모든 태그요소가 2배로 확대 됩니다.
      
      2.제이쿼리의 transform의 scale속성 사용법	 	
        문법-> $(요소선택).css("transform","scale(확대비율)")
        
        예-> $("body").css("transform","scale(2)")
          //화면에서 <body>영역의 모든 태그요소가 2배로 확대 됩니다.
          
        참고 :  	 transform의 scale속성을 이용해 보면 확대 기준점이 가운데로 지정되어 있어
                사방으로 퍼져 확대됨.
                확대 기준점을 바꾸고 싶으면 CSS에 transform-origin속성을 사용 하면됨.
      
      3.제이쿼리의 transform-origin속성 사용법
        문법-> $(요소선택).css("transform-origin","x축 위칫값 y축 위칫값")
        
        예-> $("body").css("transform-origin","0 0");
          //<body>영역의 확대 기준점이 "0 0" 으로 설정되어  
          //(0,0)위치에서 x축 과 y축 방향으로 확대됨
  
  */

/*zoom 버튼*/
let scale = 1;

$('.zoom_in').on('click', () => {
  scale += 0.1;
  $('#wrap').css('transform', `scale(${scale})`);
});

$('.zoom_return').on('click', () => {
  scale = 1;
  $('#wrap').css('transform', `scale(${scale})`);
});

$('.zoom_out').on('click', () => {
  scale -= 0.1;
  $('#wrap').css('transform', `scale(${scale})`);
});

//-----------------------------------------------------------------------------------------------------

/*
      주제 : 인쇄 버튼 만들기 
      인쇄 버튼 웹사이트에서 인쇄 버튼을 방문자가 눌렀을대.. 인쇄창을 뛰우는 방법을 알아 봅시다.
    */
/*인쇄 버튼*/

$('.print_btn').on('click', () => {
  window.print();
});

//-----------------------------------------------------------------------------------------------------

/*
    주제 : 검색 창 안내 가이드 만들기
    검색 입력 요소에 마우스로 클릭해 포커스가 이동되면 
    안내 가이드 변경 이미지가 사라지고,
    포커스가 다른 요소로 이동되었을때 검색 입력 요소에 아무 내용이 없으면
    다시 안내가이드 배경 이미지가 다시 나타나게 하기 
    */
/*검색 창 안내 가이드*/

$('#keyword')
  .on('focus', () => {
    $('#keyword').css('backgroundImage', 'none');
  })
  .on('blur', () => {
    $('#keyword').css(
      'backgroundImage',
      'url(http://127.0.0.1:5500/project/images/sch_guide.gif)'
    );
  });

//-----------------------------------------------------------------------------------------------------

/*
    주제 : GNB(글로벌 네비게이션 바) 메뉴 만들기
    사이트의 모든 페이지에 노출되는 메뉴를 가리키며,
    보통 사이트 상단에 위치합니다.
    GNB상위 메뉴에 마우스가 올라갔을때, 해당 상위 메뉴 이미지는 활성화(컬러)된 이미지로 바뀌게 됨.
    이어서 마우스를 다른 상위메뉴로 이동하면,
    앞서 활성화된 상위 메뉴 이미지는 다시 비활성화(무채도)된 이미지로 바뀌고,
    현재 마우스가 올라간 상위 메뉴의 이미지는 활성화된 이미지로 바뀌도록 만들자 
    */
/*GNB 메뉴*/
$('#gnb-homeImg').hover(
  () => {
    // hover
    $('.sub1').slideDown();
  },
  () => {
    // none hover
    $('.sub1').slideUp();
  }
);

$('#gnb-intro').hover(
  () => {
    // hover
    $('.sub2').slideDown();
  },
  () => {
    // none hover
    $('.sub2').slideUp();
  }
);

$('#gnb-book').hover(
  () => {
    // hover
    $('.sub3').slideDown();
  },
  () => {
    // none hover
    $('.sub3').slideUp();
  }
);

$('#gnb-customer').hover(
  () => {
    // hover
    $('.sub4').slideDown();
  },
  () => {
    // none hover
    $('.sub4').slideUp();
  }
);

//-----------------------------------------------------------------------------------------------------
/*
    주제: 슬라이드 전체 메뉴 만들기
    - 전체 메뉴를 클릭 했을 때 전체메뉴가 slide효과로 펼쳐지고
      전체 메뉴 버튼 이미지도 바뀌도록 만들어 보자
    - [전체메뉴]버튼을 클릭 했을때 전체 메뉴가 아래로 펼쳐지며
      [CLOSE]버튼을 클릭했을때는 가시 전체메뉴가 위로 접히면서 사라지게 해보자.  
    */

/*전체메뉴*/
$('#total_btn a img').on('click', () => {
  $('#total_menu').slideToggle();
});
/*전체 메뉴 닫기 버튼*/
$('#total_close a img').on('click', () => {
  $('#total_menu').slideUp();
})
//-----------------------------------------------------------------------------------------------------

/*
      주제 :  현재 날짜 표기 하기
      사이트 헤더 영역에  현재 연도, 월, 일을 표기 합니다.
    Date객체를 사용하여 오늘의 날짜 정보를 구해 올것입니다.
    */

/*날짜 표기*/
$(document).ready(setInterval(() => {
  const now = new Date();

  const year = now.getFullYear(); //  연도
  $('.year').text(year);

  const month = now.getMonth(); //  월
  $('.month').text(month);

  const date = now.getDate(); //  일
  $('.date').text(date);

  const hour = now.getHours();  //  시간
  $('.hour').text(hour);

  const minute = now.getMinutes();  //  분
  $('.minute').text(minute);

  const second = now.getSeconds();  //  초
  $('.second').text(second);

}), 1000)
//-----------------------------------------------------------------------------------------------------

/*
    주제 : 관련 사이트 이동 선택 상자 만들기
    -푸터 영역에는 관련 사이트 이동 선택 상자가 있습니다.
      사이트에 방문객체 관련 사이트를 선택한 후 [이동]버튼을 클릭하였을 때 새창으로 선택한 사이트가 열리도록 할것입니다.
      여기서는 [이동] 버튼을 클릭했을때 <form>태그에서 전송이 일어나므로 submit 이벤트를 적용 하겠습니다.
      이벤트가 발생 했을 때 이벤트 핸들러에 window.open(사이트 경로)메서드를 이용해 새창 으로 지정한 사이트가 열리도록 만들것입니다.  
    */

/*관련 사이트 이동*/
$(document).ready(() => {
  $('#relsiteBtn').on('click', () => {
    let selectedLink = $('.select').val();
    window.open(selectedLink, '_blank');
  });
});


//-----------------------------------------------------------------------------------------------------

/*옆쪽 퀵 메뉴*/
$(document).ready(() => {
  let currentPosition = parseInt($('#quick_menu').css('top'));
    $(window).scroll(() => {
      let position = $(window).scrollTop();
      $('#quick_menu').stop().animate({
        'top': position + currentPosition + 'px'
      }, 500)
    });
});
