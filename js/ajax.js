//主页数据
$.getJSON('http://localhost:3000/service', function (data) {
  for (var i = 1; i <= 8; i++) {
    var serve = 'serve'+i
    var obj = data[serve]
    var $pic = $('#pic'+i)
    var picDom = ''
    var dataDom= ''
    $(obj).each(function (index,item) {
      picDom += '<div class="content_pic">'+
        '<a href="./detail.html?key='+i+'?id='+index+'">'+
        '<img src="'+item.imgUrl+'" alt="">'+
        '<div class="serviceName">'+item.name+'</div>'+
        '<div class="description">'+item.description+'</div>'+
        '<div class="price">'+
        '<span style="font-size: 20px">'+item.price+'</span>'+
        '<span class="btn">查看详情</span>'+
        '</div>'+
        '</a>'+
        '</div>'
      $pic.html(picDom)
    })
  }
  $(data.partner).each(function (index, item) {
    dataDom += '<li><a href=""><img src="'+item.imgUrl+'"/></a></li>'
    $('.partner_text ul').html(dataDom)
  })
})

$.getJSON('http://localhost:3000/servicepro', function (data) {
  var data =data.servicepro
  var dataDom=''
  for (var i = 0; i < data.length; i++) {
    dataDom += '<li>\n' +
                    '<a href="./comment.html?id='+i+'">\n' +
                      '<img src="'+data[i].imgUrl+'">\n' +
                      '<p class="top">\n'+
                        '<img src="'+data[i].iconUrl+'" alt="">\n' +
                        '<span>'+data[i].name+'</span>\n'+
                      '</p>\n'+
                      '<p class="bottom">\n'+
                      '已接单'+data[i].order+'单\n'+
                      '<i>好评'+data[i].estimate+'%</i>\n'+
                      '</p>\n'+
                    '</a>\n'+
                 '</li>\n'
    }
  $('#serve_pic ul').html(dataDom)
})

$.getJSON('http://localhost:3000/detail', function (data) {

var dataDom = '<img src="'+data.imgUrl+'" alt="">'+
              '<span class="spm">'+
                '<i>'+data.name+'</i>'+
                '<i style="display: inline-block">'+
                  '价格'+
                  '<b>'+data.price+
                  '<em>元/小时</em>'+
                  '</b>'+
                '</i>'+
                '<i class="oldpic">'+
                  '原价'+
                  '<em>'+data.oldPrice+'元</em>'+
                '</i>'+
                '<i>'+
                  '已售'+
                  '<em style="color: #fc545e">'+data.soldCount+'</em>'+
                '</i>'+
              '</span>'+
                '<span class="spf">'+
                '<img src="http://www.daoway.cn/pcimages/daowayApp.png" alt="">'+
                '<p>扫一扫</p>'+
                '<p style="color: #fb474f">立即执行</p>'+
              '</span>'

  $('.detail_top').html(dataDom)
  console.log(dataDom)

})

var num = 0
/*$.getJSON('http://localhost:3000/comments?page='+num+'', function (data) {
  var dataDom =''
  $(data).each(function (index, item) {
    var star = item.star
    var starDom = ''

    for (var i = 0; i < star; i++) {
      starDom += '<img src="./imgs/download.png">'
    }
    for (var i = 0; i < 5-star; i++) {
      starDom += '<img src="./imgs/gray_star.png">'

    }
    dataDom += '<div class="commentDetail_wrap">\n' +
      '                            <img src="'+item.iconUrl+'" alt="">\n' +
      '                            <ul class="user">\n' +
      '                                <li class="userId">'+item.nick+'</li>\n' +
      '                                <li class="star">\n' +
      '                                    <span>\n' +
                                                starDom+
      '                                    </span>\n' +
      '                                    <em>2018-04-23</em>\n' +
      '                                </li>\n' +
      '                                <li class="commentMsg">'+item.comment+'</li>\n' +
      '                                <li class="commentAdress">\n' +
      '                                    <img src="http://www.daoway.cn/pcimages/position.jpg" alt="">\n' +
      '                                    '+item.city+' '+item.area+'\n' +
      '                                </li>\n' +
      '                            </ul>\n' +
      '                        </div>'

    $('.commentDetail').html(dataDom)
  })
})*/
$('#showpage a').click(function () {
  var index = $(this).index()
  console.log(index)
  num = index
  $('#showpage a').removeClass('active')
  $(this).addClass('active')
  var dataDom =''
  $.getJSON('http://localhost:3000/comments?page='+num+'', function (data) {
    $(data).each(function (index, item) {
      var star = item.star
      var starDom = ''

      for (var i = 0; i < star; i++) {
        starDom += '<img src="./imgs/download.png">'
      }
      for (var i = 0; i < 5-star; i++) {
        starDom += '<img src="./imgs/gray_star.png">'

      }
      var star = item.star
      dataDom += '<div class="commentDetail_wrap">\n' +
        '                            <img src="'+item.iconUrl+'" alt="">\n' +
        '                            <ul class="user">\n' +
        '                                <li class="userId">'+item.nick+'</li>\n' +
        '                                <li class="star">\n' +
        '                                    <span>\n' +
                                                starDom+
        '                                    </span>\n' +
        '                                    <em>2018-04-23</em>\n' +
        '                                </li>\n' +
        '                                <li class="commentMsg">'+item.comment+'</li>\n' +
        '                                <li class="commentAdress">\n' +
        '                                    <img src="http://www.daoway.cn/pcimages/position.jpg" alt="">\n' +
        '                                    '+item.city+' '+item.area+'\n' +
        '                                </li>\n' +
        '                            </ul>\n' +
        '                        </div>'

      $('.commentDetail').html(dataDom)
    })
  })
})
$('#showpage .active').trigger("click")