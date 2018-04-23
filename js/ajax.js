$.getJSON('http://localhost:3000/service', function (data) {
  // for (var i = 0; i < data.length; i++) {
  //   console.log(data[i].imgUrl)
  //   // $('<img src="' + data[i].imgUrl + '">').appendTo('#pic')
  //   // console.log($(this)[0].imgUrl[1])
  //   $('#pic1').append('<div class="content_pic">' +
  //       '<a href="">' +
  //         '<img src="'+data[i].imgUrl+'" alt="">'+
  //       '</a>'+
  //     '</div>')
  //
  // }
  // var i = 0
  // $(data.serve1).each(function () {
  //   console.log($(this))
  //   if(i === 5){
  //     return
  //   }else {
  //     i += 1
  //   }
  //   console.log(i)
  //   console.log($('#pic'+i))
  //   console.log($(this)[0])
  //   $('#pic'+i).append('<div class="content_pic">' +
  //     '<a href="">' +
  //       '<img src="'+ $(this)[0].imgUrl+'" alt="">'+
  //      '</a>'+
  //   '</div>')
  // })
  // $(data).each(function (index, item) {
  //   console.log($(this))
  //   console.log(index, item)
  //   // if(index === data.length - 1){
  //   //   return
  //   // }
  //   console.log(index)
  // })
  var a = -1
  console.log(data)
  $.each(data, function (i, item) {
    // console.log(data.serve1)
    $(data).attr('partner', '')
    console.log(i, item)
    if(a === 8){
      return
    }else {
      console.log(a)
      $('#c'+a).append('<div class="pic_wrap" id="pic'+a+'"></div>')
      a++
    }
    // $(item).each(function (index, list) {
    //        console.log(a);
    //        console.log(list.imgUrl)
    //        console.log($('#pic'+ a))
    //        console.log($('#w1'))
    //        $('#pic'+ a + '').addClass('aaa')
    //     })
    // setTimeout(function(){
    //   $(item).each(function (index, list) {
    //     console.log(a);
    //     console.log(list.imgUrl)
    //     console.log($('#pic'+ a))
    //     console.log($('#w1'))
    //     $('#pic'+ a).addClass('aaa')
    //   })
    // },2000);
    // $('#c'+a).delegate(item+ a, 'each', function () {
    //   $('#pic'+ a).addClass('aaa')
    // })
    $(item).each(function (index, list) {
      console.log(a);
      console.log(list.imgUrl)
      console.log($('#pic'+ a))
      var pic = document.getElementById('pic'+a)
      $('#pic'+ a).addClass('aaa')
    })
  })
})
.error(function () {
  $('#pic1').append('<div class="content_pic">'+
    '<p>数据未找到</p>'+
  '</div>')
})