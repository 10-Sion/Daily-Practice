/*
 주제 : Show & Hide 로그인폼 만들기
 
 - 화면상단에 [로그인]버튼을 눌렀을때, 화면 상단 바깥에 숨겨져 있던
 로그인 폼이 위에서 내려와 화면에 나타나도록 만들자.

 -그리고 로그인 폼에 [close(닫기)]버튼을 눌렀을때는 
 폼이 다시 화면 상단 바깥으로 이동되어 숨겨지도록 만들자.
 
 -또한 로그인 폼의 아이디 및 비밀번호 입력 요소에 안내가이드도 만들자
*/ 

// 로그인 버튼
$(document).ready(() => {
  $('.login_wrap').find('img').on('click', () => {
    $('#login_f').animate({
      top: '30px'
    }, 200);
    
  });
});

// 로그인 창 닫기
const $loginClose = $('.login_close_btn');

$loginClose.on('click', loginClose).find('img');

function loginClose() {
    $('#login_f').animate({
      left: '-110px',
      top: '-500px'
      
    }, 200);
  };

// id와 비밀번호 focus시 숨김처리
const $idImg = $('.user_id').find('img');
const $pwImg = $('.user_pw').find('img');
const $userId = $('#user_id');
const $userPw = $('#user_pw');

$idImg.on('click', idClick);
$pwImg.on('click', pwClick);
$userId.on('focus', idClick);
$userPw.on('focus', pwClick);

function idClick() {
  if($userId.val().trim() === ''){
    $idImg.addClass('hide');
  } else {
    $idImg.removeClass('hide');
  }
};

function pwClick() {
  if($userPw.val().trim() === ''){
    $pwImg.addClass('hide');
  } else {
    $pwImg.removeClass('hide');
  }
};

$userId.on('focusout', () => {
  if($userId.val().trim() === ''){
    $idImg.removeClass('hide');
  }
});

$userPw.on('focusout', () => {
  if($userPw.val().trim() === ''){
    $pwImg.removeClass('hide');
  }
});

//-----------------------------------------------------------------------------------------------------

/*
 주제 :  ZOOM 버튼 만들기
 [+]를 클릭하면 화면이 확대 되고,
 [-]를 클릭하면 화면이 축소 됩니다.
 그리고 [100]을 눌렀을때는 원래 100%사이즈로 되돌리도록 만들기
 */
let scale = 100;

$('#zoom a').on('click', function() {
  let zIdx = $("#zoom a").index(this);

  switch(zIdx) {
    case 0: 
      scale += 10;
      break;

    case 1:
      scale = 100;
      break;

    case 2:
      scale -= 10;
      break;
  }

  $('body').css({
    'overflow-x': 'auto',
    'transform-origin': '0 0',
    'transform': 'scale(' + scale/100 + ')',
    'zoom': scale + '%'
  });

  return false;
});


//-----------------------------------------------------------------------------------------------------
  /*
   	주제 : 인쇄 버튼 만들기 
   	인쇄 버튼 웹사이트에서 인쇄 버튼을 방문자가 눌렀을대.. 인쇄창을 뛰우는 방법을 알아 봅시다.
   */
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
$('#keyword')
  .on('focus', () => {
    $('#keyword').css('backgroundImage', 'none');
  })
  .on('blur', () => {
    if($('#keyword').val().trim() === ''){
    $('#keyword').css(
      'backgroundImage',
      'url(images/sch_guide.gif)'
    )};
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

  const $homeImg = $('#gnb').find('img').eq(0);
  const $introImg = $('#gnb').find('img').eq(1);
  const $listImg = $('#gnb').find('img').eq(2);
  const $customerImg = $('#gnb').find('img').eq(3);

  $homeImg.hover(
    () => {
      // hover
      $('.sub1').slideDown('slow');
    },
    () => {
      // none hover
      $('.sub1').slideUp('fast');
    }
  );
  
  $introImg.hover(
    () => {
      // hover
      $('.sub2').slideDown('slow');
    },
    () => {
      // none hover
      $('.sub2').slideUp('fast');
    }
  );
  
  $listImg.hover(
    () => {
      // hover
      $('.sub3').slideDown('slow');
    },
    () => {
      // none hover
      $('.sub3').slideUp('fast');
    }
  );
  
  $customerImg.hover(
    () => {
      // hover
      $('.sub4').slideDown('slow');
    },
    () => {
      // none hover
      $('.sub4').slideUp('fast');
    }
  );



//-----------------------------------------------------------------------------------------------------
  /*
   주제: 슬라이드 전체 메뉴 만들기
   - 전체 메뉴를 클릭 했을 때 전체메뉴가 slide효과로 펼쳐지고
     전체 메뉴 버튼 이미지도 바뀌도록 만들어 보자
   - [전체메뉴]버튼을 클릭 했을때 전체 메뉴가 아래로 펼쳐지며
     [CLOSE]버튼을 클릭했을때는 다시 전체메뉴가 위로 접히면서 사라지게 해보자.  
   */
  const $totalBtn = $('#total_btn').find('img');
  const $totalCloseBtn = $('#total_close').find('img');
  
$totalBtn.on('click', () => {
  $('#total_menu').slideToggle('fast');
});

$totalCloseBtn.on('click', () => {
  $('#total_menu').slideUp('fast');
})





//-----------------------------------------------------------------------------------------------------

  /*
    주제 :  현재 날짜 표기 하기
    사이트 헤더 영역에  현재 연도, 월, 일, 시, 분 초를 표기 합니다.
    초는 1초 간격으로 흘러가게 표기.
  Date객체를 사용하여 오늘의 날짜 정보를 구해 올것입니다.
  */
  
$(document).ready(setInterval(() => {
  const now = new Date();

  const year = now.getFullYear();
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

}), 1000);





//-----------------------------------------------------------------------------------------------------

  /*
   주제 : 관련 사이트 이동 선택 상자 만들기
   -푸터 영역에는 관련 사이트 이동 선택 상자가 있습니다.
  	사이트에 방문객체 관련 사이트를 선택한 후 [이동]버튼을 클릭하였을 때 새창으로 선택한 사이트가 열리도록 할것입니다.
  	여기서는 [이동] 버튼을 클릭했을때 <form>태그에서 전송이 일어나므로 submit 이벤트를 적용 하겠습니다.
  	이벤트가 발생 했을 때 이벤트 핸들러에 window.open(사이트 경로)메서드를 이용해 새창 으로 지정한 사이트가 열리도록 만들것입니다.  
  */
$(document).ready(() => {
  const $relSiteBtn = $('#relSite_wrap').find('input');

  $relSiteBtn.on('click', () => {
    let selectedLink = $('#relSite_wrap').find('select').val();
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






