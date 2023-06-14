//  새로운 to do list 추가 이벤트
$('.todo').on('click', '.todoBtn', function() {
  const input = $(this).prev('input').val().trim();

    if(input.length > 0){  // 공백 체크 후 추가
      /*
      $('.todo li').each(function(index) {
        $(this).addClass('newList' + index);
      });     
      

      const listClass = 'newList' + ($('.todo li').length -1);
      
      $('.main ul').append(`
        <li class="${listClass}">
          <span>${input}</span>
          <button class="selectEdit"></button>
        </li>
        `);
        => 클래스 추가는 되나 li가 ul에 추가되어 개수 환산이 제대로 안 됨
      */

        //  텍스트 입력 후 추가 버튼 클릭 시 li 형태로 아래에 추가됨 : 각 다른 id
      const $ul = $(this).closest('.main').find('ul');     
      const $lis = $ul.find('li');
      const listClass = 'newList' + $lis.length;

      $ul.append(`
        <li class="to-do" id="${listClass}">
          <span>${input}</span>
          <button class ="editBtn" id="editConfirm${$lis.length}">수정?</button>
          
        </li>
      `)
      //  생성된 개체 수정 버튼은 숨김처리
        $('.editBtn').addClass('hidden');

    } else {
      return;
    }
});

// 수정 버튼 클릭 시 이벤트
$('.edit').on('click',  function() {
  const count = $('.main li').length;
  if(count > 1) {   //  todo 목록 1개 이상이어야 이벤트 발생
    
    const $editBtns = $('.main .editBtn');
    const $changeBtn = $('<button class="totalChange">변경</button>');
    const $cancleBtn = $('<button class="totalCancle">취소</button>');

    $('.editBtn').removeClass('hidden');  // 수정 버튼 활성화
    $(this).replaceWith($changeBtn);
    $('.delete').replaceWith($cancleBtn);

    //  각 수정 버튼 클릭할 때 마다 실행되는 이벤트
    $editBtns.each(function() {
      const $editBtn = $(this);

      $editBtn.on('click', function(){
        const $editList = $(this).closest('li');
        const $span = $editList.find('span');

        const $editConfirmBtn = $('<button class="editConfirmBtn">ㄹㅇ?</button>');
        const $editCancleBtn = $('<button class=""editCancleBtn>ㄴㄴ</button>')

        //  수정된 텍스트의 저장
        $editConfirmBtn.on('click', function() {
          const $input = $editList.find('input.todo')  // 입력된 텍스트
          const newText = $input.val().trim();

          const $newSpan = $('<span></span>').text(newText);
          $span.replaceWith($newSpan);

          $input.remove();
          $editConfirmBtn.remove();
          $editCancleBtn.remove();
        });

        // 새 입력 취소 버튼의 동작
        $editCancleBtn.on('click', function() {
          const $editList = $(this).closest('li');
          const $span = $editList.find('span');
          const originalTxt = $span.data('original-text');

          const $newSpan = $('<span></span>').text(originalTxt)
        });

        //  기존 수정버튼 수정 확정 버튼으로 대체 후 취소 버튼 추가
        $(this).replaceWith($editConfirmBtn);
        $editList.append($editCancleBtn);

        $span.html('<input type="text" class="todo">');
      })
    });
  /*  
  수정할 개체 선택 시
  $('.editBtn').on('click', () => {
    const $editBtn = $('.main .editBtn');
    const $editConfirmBtn = $('<button class="editConfirmBtn">ㄹㅇ?</button>');
    const $editCancleBtn = $('.main .editCancleBtn');

  $editBtn.replaceWith($editConfirmBtn);
  $editCancleBtn.removeClass('hidden');


  })*/
} 
});

$('.delete').on('click', function() { 
  const $selectedLi = $(this).closest('li');
  $selectedLi.remove();

  const removeComplete = $( //  삭제 기능 종료 버튼
    '<button class="deleteComplete">완료</button>');
    $(this).replaceWith(removeComplete);

//  개별 삭제 버튼의 표시
  $('.main').on('mouseenter', '.to-do',  function() { 
    const deleteBtn = $('<button id="delete">삭제?</button>');
    $(this).append(deleteBtn);      
    
  }).on('mouseleave', 'li', function() {
    $(this).find('#delete').remove();
  });

  $('.main').on('click', '#delete', function() {
    $(this).closest('li').remove();
  })
  $('.deleteComplete').on('click',  function() {
    $('.main').off('mouseenter','.to-do');
    $('.main').off('mouseleave', 'li');
    $('.main').off('click', '#delete');
    $(this).replaceWith('<button class="delete">삭제</button>');
  });
});
