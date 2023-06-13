// 年齢確認ポップアップ
window.onload = function () {
  var yesButton = document.getElementById('yes');
  var noButton = document.getElementById('no');
  var blindfold = document.getElementById('blindfold');
  // 年齢確認のポップアップ中スクロール止める
  document.body.classList.add('is-fixed');

  yesButton.onclick = function () {
    // 年齢確認のポップアップ中スクロール止める解除
    document.body.classList.remove('is-fixed');
    blindfold.style.display = 'none';
  };

  noButton.onclick = function () {
    window.location.href = 'https://stop-underagedrinking.com/';
  };
};
