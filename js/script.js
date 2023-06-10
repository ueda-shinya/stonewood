$(function () {
    $('#js-slider-1').slick({
        autoplay: true,
        arrows: false, // 前・次のボタンを表示する
        dots: false, // ドットナビゲーションを表示する
        appendDots: $('.dots-1'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        centerPadding: '0',
        responsive: [{
            breakpoint: 768,//切り替えたいデバイス幅を入れる
            settings: {
                autoplay: true,
                slidesToShow: 1,
                centerPadding: '0',
            }
        }],
    });
});

$(function () {
    $('#js-slider-2').slick({
        autoplay: true,
        arrows: true, // 前・次のボタンを表示する
        dots: false, // ドットナビゲーションを表示する
        appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 3, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        centerPadding: '0',
        responsive: [{
            breakpoint: 768,//切り替えたいデバイス幅を入れる
            settings: {
                autoplay: false,
                slidesToShow: 1,
                centerPadding: '13.3%',
            }
        }],
    });
});