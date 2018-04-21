//导航动画
function nav() {
  $(window).scroll(function () {
    var $ws = $(window).scrollTop()
    if($ws > 70){
      $('.header').addClass('roll')
    }else {
      $('.header').removeClass('roll')
    }
  })
}

//二级导航显示
function secondNav () {
  $('.banner_nav ul li').hover(function () {
    $(this).children('a').children('img').attr('src', 'http://www.daoway.cn/pcimages/icon1.png').addClass('act')
    $(this).children('.second').show();

  }, function () {
    $(this).children('.second').hide();
    $(this).children('a').children('img').attr('src', 'http://www.daoway.cn/pcimages/right.png').attr('class', '')
  })
}