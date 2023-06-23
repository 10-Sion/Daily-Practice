  /*
  콘텐츠 영역 개발하기
  -콘텐츠 영역은 크게 
    비주얼배너, 
    알림판, 
    최근게시물, 
    알림배너, 
    베스트Book, 
    페이스북,
    마케팅, 
    온라인서점
  으로 나뉩니다.
  
  -레이아웃은 비주얼 배너가 들어가는 visual영역과
    나머지 주제 소스들이 들어가는 content영역으로 나뉘었음.  
  */


  //-----------------------------------------------------------
  /*
  주제 : 비주얼 배너 터치 슬라이드 만들기
  비주얼 배너 영역은 배너 중 한개만 노출되어 이루어져 있으며,
  [이전/다음]버튼을 누르면 배너가 이동되어 바뀌게 됨.
  스마트폰에서는 손가락으로 터치 했을때 도 배너가 바뀔수 있도록 제작 하자
  */

    /*터치 슬라이드 비주얼 영역*/
    $(document).ready(() => {
      $('.swipe').css('visibility','visible')
      $('.touch_bannerSwipe-wrap').css({
        width: '1003px',
        height: '263px'
      })

      $('.touch_bannerSwipe-wrap').bxSlider({
        auto: true,
        speed: 1000,
        pager:true,
        wrapperClass:'sliderwrap',
        slideHeight: 200
        });


      });

      



      
    /*비주얼 이전, 다음 버튼*/
  
      
    //-----------------------------------------------------------

    /*
    주제 : 자동 롤링 배너와 제어 버튼을 활용한 알림판 만들기
    
    알림판은 일정 시간 간격으로 자동으로 배너 이미지가 바뀌면서 해당하는 배너에 버튼이 활성화 됨.
    이때 버튼을 마우스로 클릭하면 버트넹 해당하는 배너로 이동 됨.
    그리고 정지 ■ 버튼을 누르면 자동으로 넘어가던 배너가 정지되거, 재상 ▶ 버튼을 누르면 다시 배너가 넘어가게 됨 
    */
    
    /*롤링 버튼 배너*/
    let slider = $('.autoSlide').bxSlider({
      auto: true,
      speed: 4000,
      pager:true,
      autoControls: true,
      stopAutoOnClick: true,
      
      });

      // let selectedBtn = [
      //   'images/pop_btn_1_over.gif',
      //   'images/pop_btn_2_over.gif',
      //   'images/pop_btn_3_over.gif',
      //   'images/pop_btn_4_over.gif'
      // ];
      // let unSelectedBtn = [
      //   'images/pop_btn_1_out.gif',
      //   'images/pop_btn_2_out.gif',
      //   'images/pop_btn_3_out.gif',
      //   'images/pop_btn_4_out.gif'
      // ];


      
      $(document).ready(() => {
      const img = [
        { // 각 버튼 선택과 미선택시 이미지 구분
          selected: 'images/pop_btn_1_over.gif',
          unselected: 'images/pop_btn_1_out.gif'
        },
        {
          selected: 'images/pop_btn_2_over.gif',
          unselected: 'images/pop_btn_2_out.gif'
        },
        {
          selected: 'images/pop_btn_3_over.gif',
          unselected: 'images/pop_btn_3_out.gif'
        },
        {
          selected: 'images/pop_btn_4_over.gif',
          unselected: 'images/pop_btn_4_out.gif'
        }
      ];

      // 버튼 4개에 roll_btn 클래스 부여중
      // 버튼 클릭 시 해당 슬라이드 이동
      $('.roll_btn').on('click', function() {
        var index = $(this).index('.roll_btn');
        slider.goToSlide(index);

        // 버튼 클릭 시 해당 버튼이 선택된 버튼인지를 구분
        $('.roll_btn').each(function(i) {
          let imageSrc = (i === index) ? 
                          img[i].selected : 
                          img[i].unselected;

          // 삼항 결과에 따른 이미지 속성값 변경
          $(this).find('img').attr('src', imageSrc);
        });
      });

        // 자동재생 버튼이미지
        const playImg = [
          {
            selected: 'images/pop_btn_play_on.gif',
            unselected: 'images/pop_btn_play_off.gif'
          },
          {
            selected: 'images/pop_btn_stop_on.gif',
            unselected: 'images/pop_btn_stop_off.gif'
          }
        ];
        
        // 자동재생 버튼 클릭 시 실행, 정지
        // 해당 위치 이미지의 변경
        $('.playBtn').on('click', () => {
        slider.startAuto();
        $('.playBtn img').attr('src',playImg[0].selected)
        $('.stopBtn img').attr('src',playImg[1].unselected)
      })
      
      $('.stopBtn').on('click', () => {
        slider.stopAuto();
        $('.playBtn img').attr('src',playImg[0].unselected)
        $('.stopBtn img').attr('src',playImg[1].selected)
      })
    });


      
    
    /*
    autoPlay 함수가 4초 간격으로 호출되어 1~4번 버튼이 순차적으로 강제로 클릭되어 자동으로 배너가 바뀝니다.
    */
  
  //함수의 전체 흐름
  //최초 한번은 3초 간격으로 autoPlay함수를 호출하여 실행문을 실행하고,
  //다음번에는 4초 간격으로  반복적으로 재귀함수(autoPaly()함수)를 호출하여 실행문을 실행 시킴.
  

  
  
  /* 재생 버튼 ▶ 을 클릭했을때 다시 배너가 일정한 간격으로 바뀌게 하기  */  
  
  
    
    
  /*
  정지 버튼 ■을 클릭 했을때 일정한 간격으로 함수를 실행하여 버튼을 순차적으로 클릭 되게 하는 setTimeout()메서드를 제거하고,
  정지 버튼 ■을 활성화 시킵니다. 즉, 자동 배너를 정지 시킵니다.  
  */  
    


  //-----------------------------------------------------------
    /*
    주제 : 탭 메뉴를 이용해 최근 게시물 리스트 만들기
    
    - 탭메뉴의 경우 최초 탭버튼인[공지사항]이 활성화되어 보입니다.
          만일 방문자가 [질문과답변]탭을 클릭했을 때는 [공지사항]은 숨겨져야 하고,
      [질문과 답변]의 내용은 활성화되어 보여야 합니다.
      
    - 먼저 탭버튼에 <a>에 on()메서드를 사용하여 mouseover,focus,click이벤트를 등록하였고,
          이벤트 핸들러에는 이벤트가 발생 했을때 마우스를 올린 탭 버튼과 탭에 해당하는 게시물 목록이 활성화되어 보이도록 만들자. 
    */
    
  
    /*탭메뉴*/
      const $tabBtn1 = $('.tab_btn1 a img');
      const $tabBtn2 = $('.tab_btn2 a img');
      const $tabBtn3 = $('.tab_btn3 a img');

      $tabBtn1.on('click', tabBtn1)
                          .on('mouseover', tabBtn1)
                          .on('focus', tabBtn1)

      function tabBtn1() {
        $('.tabFirst').css('display','block');
        $('.tabSecond').css('display','none');
        $('.tabThird').css('display','none');
      };

      $tabBtn2.on('click', tabBtn2)
                          .on('mouseover', tabBtn2)
                          .on('focus', tabBtn2)

      function tabBtn2() {
        $('.tabFirst').css('display','none');
        $('.tabSecond').css('display','block');
        $('.tabThird').css('display','none');
      };

      $tabBtn3.on('click', tabBtn3)
                          .on('mouseover', tabBtn3)
                          .on('focus', tabBtn3)

      function tabBtn3() {
        $('.tabFirst').css('display','none');
        $('.tabSecond').css('display','none');
        $('.tabThird').css('display','block');
      };

  //-----------------------------------------------------------
    
  /*  
  주제 : 자동 슬라이드 배너 를 이용한 베스트 Book영역   
    https://bxslider.com/ 접속하여 사용법 보기 
  */
    /* 베스트북 슬라이더 */

      $('#best_bg ul').bxSlider({
        minSlides: 3,
        maxSlides:5,
        slideWidth: 120,
        slideMargin: 30
        
      });
  
    //-----------------------------------------------------------

    /*  
    주제 : 제이쿼리 UI플러그인과 쿠키 플러그인 사용 하기
    - 팝업창을 드래그 하여 이동시키여면, 제이쿼리 UI플러그인을 사용함.
    - [하루동안 이창 열지 않기]버튼 기능을 하용하기 위해서는 쿠키 플러그인을 사용함
    
    참고 : 쿠키 플러그인 사용법
            
          <쿠키를 생성 하는 기본 사용법>
          $.cookie("쿠키명","쿠키값",{expires:만료일});
          설명 : 쿠키명은 나중에 저장된 쿠키의 값을 불러올때 구분하기 위한 이름임.
                    생성된 쿠키는 현재 부터 며칠동안 클라이언트 컴퓨터의 웹브라우저에 보관할건지 만료일(expires)을 지정할수 있음.

        예)
          $.cookie("pop","no",1);
              설명: 브라우저에는 "pop"라는 이름으로 "no"라는 값이 1일 동안 쿠키가 보관 됩니다.
            
        <쿠키 플러그인을 이용하여  브라우저에 저장된 쿠키를 불러오는 기본 사용법>
        $.cookie("쿠키명");
        
            저장된 쿠키값인 "no" 불러오는 방법의 예)
          $.cookie("pop");
        
        <쿠키 플러그인을 이용하여 브라우저에 저장된 쿠키를 삭제하는 기본 사용법>
        $.cookie("쿠키명",null);
        
          "pop"에 저장된 쿠키값 삭제의 예)
            $.cookie("pop",null);
            
    */
    
    /*팝업 연동*/
      $('#pop area').eq(0).on("click", () => {
        $('#pop_wrap').hide()
      })

      $('#pop area').eq(1).on("click", () => {
        $('#pop_wrap').hide()
        $.cookie('pop','no',1)
      })

      $(document).ready(() => {
        let cookie = $.cookie('pop');

        if(cookie == 'no') {
          $('#pop_wrap').hide();
        } else {
          $('#pop_wrap').show();
        }
      })

    //크롬(Chrome)브라우저로 쿠키를 확인하는 방법을 알아보도록 해요. 
  //  - 개발자도구(F12) 를 연후 Appliecation -> Storage -> Cookies 에서 확인 가능하다.






