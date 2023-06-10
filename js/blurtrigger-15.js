// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl15() {
  $('.blurTrigger15').each(function () {
    //blurTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('blur15'); // 画面内に入ったらblurというクラス名を追記
    } else {
      $(this).removeClass('blur15'); // 画面外に出たらblurというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  BlurTextAnimeControl15(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

