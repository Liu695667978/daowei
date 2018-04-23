
$.getJSON('http://localhost:3000/servicepro', function (data) {
  var data1 =data.servicepro
  var dataDom=''
  for (var i = 0; i < data1.length; i++) {
    console.log(data1[i])
    dataDom += '<li>\n' +
                    '<a>\n' +
                      '<img src="'+data1[i].imgUrl+'">\n' +
                      '<p class="top">\n'+
                        '<img src="'+data1[i].iconUrl+'" alt="">\n' +
                        '<span>'+data1[i].name+'</span>\n'+
                      '</p>\n'+
                      '<p class="bottom">\n'+
                      '已接单'+data1[i].order+'单\n'+
                      '<i>好评'+data1[i].estimate+'%</i>\n'+
                      '</p>\n'+
                    '</a>\n'+
                 '</li>\n'
    }
  $('#serve_pic ul').html(dataDom)
})

 