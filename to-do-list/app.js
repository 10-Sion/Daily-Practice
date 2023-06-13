
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

        //  텍스트 입력 후 추가 버튼 클릭 시 li 형태로 아래에 추가됨 : 각각 다른 클래스
      const $ul = $(this).closest('.main').find('ul');     
      const $lis = $ul.find('li');
      const listClass = 'newList' + $lis.length;

      $ul.append(`
        <li class="${listClass}">
          <span>${input}</span>
          <button class="editConfirm">ㅇ</button>
          <button class="editCancle">ㄴ</button>
      `)
    } else {
      return;
    }
});

$('.edit').on('click', () => {   // 수정 기능


  $('.addedList').html(
    `<input type="text" class="todo" >` // 수정
    )
});