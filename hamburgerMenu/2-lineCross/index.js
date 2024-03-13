// jQueryで記載しています
$(document).ready(function () {
  // ハンバーガーアイコンがクリックされたとき
  $(".hum__btn").click(function () {
    $(this).toggleClass("active");
    $(".hum__nav").toggleClass("open__nav");
  });

  // ナビゲーションリンクがクリックされたとき
  $(".hum__nav-lists a").click(function () {
    $(".hum__btn").removeClass("active");
    $(".hum__nav").removeClass("open__nav");
  });
});
