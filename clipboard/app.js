$(document).ready(() => {
  function add() {
    //  글자에 클래스 추가 / 제거
    $('.copied').addClass('bounce-effect');
  }
  function remove() {
    $('.copied').removeClass('bounce-effect');
  }

  //  버튼 클릭 시 텍스트 복사
  $('.copy-btn').click(() => {
    const textField = $('#textField').select();

    navigator.clipboard.writeText(textField.val())
    .then(() => {
      add();
    setTimeout(remove, 800)
    })
    .catch(err => {
      console.error('Failed',err);
    });
  });
});