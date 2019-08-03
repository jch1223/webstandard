// lightbox
$(".lightgallery").lightGallery({
  thumbnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true
});

// 윈도우팝엉
$(".window").click(function(e) {
  e.preventDefault();
  // window.open("파일명", "팝업이름", "옵션설정")
  // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open(
    "popup.html",
    "popup1",
    "width=800, height=550, left=50, top=0, scrollbars=0, toolbar=0, menubar=0"
  );
});

// 레이어 팝엉
$(".layer").click(function(e) {
  e.preventDefault();
  // $("#layer").css("display", "block");
  // $("#layer").show();
  // $("#layer").fadeIn();
  $("#layer").slideDown();
});
$("#layer .close").click(function(e) {
  e.preventDefault();
  // $("#layer").css("display", "none");
  // $("#layer").hide();
  // $("#layer").fadeOut();
  $("#layer").slideUp();
});

// 탭메뉴
const $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active>ul").show();

function tabMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}

$tab_list
  .find("ul>li>a")
  .click(tabMenu)
  .focus(tabMenu);

// 배너
$(".banner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

// 갤러리
$(".gallery_img").slick({
  arrows: false,
  autoplay: true,
  fade: true,
  pauseOnHover: true,
  autoplaySpeed: 3000
});
$(".play").click(function() {
  $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function() {
  $(".gallery_img").slick("slickPause");
});
$(".prev").click(function() {
  $(".gallery_img").slick("slickPrev");
});
$(".next").click(function() {
  $(".gallery_img").slick("slickNext");
});

// 버튼 클릭시 전체메뉴
$(".title .btn").click(function(e) {
  e.preventDefault();
  // $("#cont_nav").css("display", "block");
  // $("#cont_nav").show()
  // $("#cont_nav").fadeIn()
  // $("#cont_nav").slideDown()

  // $("#cont_nav").toggle()
  // $("#cont_nav").fadetoggle()
  $("#cont_nav").slideToggle();
  $(this).toggleClass("on");
});
