// 年齢確認ポップアップ
window.onload = function () {
  var yesButton = document.getElementById('yes');
  var noButton = document.getElementById('no');
  var blindfold = document.getElementById('blindfold');
  document.body.classList.add('is-fixed');

  yesButton.onclick = function () {
    document.body.classList.remove('is-fixed');
    blindfold.style.display = 'none';
  };

  noButton.onclick = function () {
    window.location.href = 'example.html';
  };
};
