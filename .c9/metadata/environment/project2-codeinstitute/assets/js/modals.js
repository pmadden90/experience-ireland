{"filter":false,"title":"modals.js","tooltip":"/project2-codeinstitute/assets/js/modals.js","undoManager":{"mark":59,"position":59,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":5},"action":"insert","lines":["$(function() {","    $(\".video\").click(function () {","      var theModal = $(this).data(\"target\"),","      videoSRC = $(this).attr(\"data-video\"),","      videoSRCauto = videoSRC + \"?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1\";","      $(theModal + ' iframe').attr('src', videoSRCauto);","      $(theModal + ' button.close').click(function () {","        $(theModal + ' iframe').attr('src', videoSRC);","      });","    });","  });"],"id":1}],[{"start":{"row":10,"column":5},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":2},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":12,"column":2},"end":{"row":15,"column":5},"action":"insert","lines":["$('.close-modal').click(function(e) {","    e.preventDefault();","    $('.video-embed').children('iframe').attr('src', '');","  });"],"id":3}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["l"],"id":4},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["a"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["d"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"remove","lines":["o"]},{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"remove","lines":["m"]},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"remove","lines":["-"]}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":19},"action":"remove","lines":["-embed"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":15,"column":5},"action":"remove","lines":["$(function() {","    $(\".video\").click(function () {","      var theModal = $(this).data(\"target\"),","      videoSRC = $(this).attr(\"data-video\"),","      videoSRCauto = videoSRC + \"?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1\";","      $(theModal + ' iframe').attr('src', videoSRCauto);","      $(theModal + ' button.close').click(function () {","        $(theModal + ' iframe').attr('src', videoSRC);","      });","    });","  });","  ","  $('.close').click(function(e) {","    e.preventDefault();","    $('.video').children('iframe').attr('src', '');","  });"],"id":6},{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["$('#myModal').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["2"],"id":7}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["$('#myModal2').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"],"id":9}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["2"],"id":10}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["1"],"id":11}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["1"],"id":12}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":14,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["$('#myModal2').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"],"id":14}],[{"start":{"row":19,"column":3},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":21,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["$('#myModal2').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"],"id":16}],[{"start":{"row":26,"column":3},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":28,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["$('#myModal2').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"],"id":18}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":["2"],"id":19}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["3"],"id":20}],[{"start":{"row":21,"column":11},"end":{"row":21,"column":12},"action":"remove","lines":["2"],"id":21}],[{"start":{"row":21,"column":11},"end":{"row":21,"column":12},"action":"insert","lines":["4"],"id":22}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"remove","lines":["2"],"id":23}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["5"],"id":24}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":230},"action":"remove","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"],"id":25},{"start":{"row":1,"column":28},"end":{"row":1,"column":230},"action":"insert","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2S6k9mNFdtg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"]}],[{"start":{"row":14,"column":0},"end":{"row":19,"column":3},"action":"remove","lines":["$('#myModal3').on('show', function () {","  $('div.modal-body').html('<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');  ","});","$('#myModal').on('hide', function () {","  $('div.modal-body').html('');  ","});"],"id":26}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":27}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":230},"action":"remove","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"],"id":28},{"start":{"row":16,"column":28},"end":{"row":16,"column":220},"action":"insert","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nKZvMHYsTfs\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"]}],[{"start":{"row":23,"column":28},"end":{"row":23,"column":230},"action":"remove","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69-m5BPa314\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"],"id":29},{"start":{"row":23,"column":28},"end":{"row":24,"column":216},"action":"insert","lines":["<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ps3OgWXREiM\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>","                        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I1Vw66Zs0dQ\" frameborder=\"0\" allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"]}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":[" "],"id":30}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["+"],"id":31}],[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["'"],"id":32}],[{"start":{"row":23,"column":220},"end":{"row":23,"column":221},"action":"insert","lines":["'"],"id":33}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["2"],"id":34}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["4"],"id":35}],[{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["5"],"id":36}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["."],"id":37},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"remove","lines":["v"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"remove","lines":["i"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"remove","lines":["d"]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"remove","lines":["."],"id":38},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"remove","lines":["v"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"remove","lines":["i"]},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"remove","lines":["d"]}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":9},"action":"remove","lines":["div."],"id":39}],[{"start":{"row":19,"column":5},"end":{"row":19,"column":9},"action":"remove","lines":["div."],"id":40}],[{"start":{"row":8,"column":5},"end":{"row":8,"column":9},"action":"remove","lines":["div."],"id":41}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":8},"action":"remove","lines":["div"],"id":42}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"remove","lines":["."],"id":43}],[{"start":{"row":23,"column":5},"end":{"row":23,"column":9},"action":"remove","lines":["div."],"id":44}],[{"start":{"row":27,"column":5},"end":{"row":27,"column":9},"action":"remove","lines":["div."],"id":45}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["2"],"id":50}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["2"],"id":51}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["2"],"id":52,"ignore":true}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["<"],"id":53},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["!"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["-"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["-"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["-"],"id":54},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["-"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["!"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["<"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":55},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":28,"column":3},"end":{"row":28,"column":4},"action":"insert","lines":["*"],"id":56},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["/"]}],[{"start":{"row":28,"column":5},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":57},{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":30,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// stop playing the youtube video when I close the modal","$('#myModal').on('hide.bs.modal', function (e) {","    // a poor man's stop video","    $(\"#video\").attr('src',$videoSrc); ","}) "],"id":58}],[{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"insert","lines":["2"],"id":59}],[{"start":{"row":30,"column":0},"end":{"row":34,"column":3},"action":"remove","lines":["// stop playing the youtube video when I close the modal","$('#myModal2').on('hide.bs.modal', function (e) {","    // a poor man's stop video","    $(\"#video\").attr('src',$videoSrc); ","}) "],"id":60},{"start":{"row":30,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["$('.videoModal').on('hide.bs.modal', function(e) {    ","    var $if = $(e.delegateTarget).find('iframe');","    var src = $if.attr(\"src\");","    $if.attr(\"src\", '/empty.html');","    $if.attr(\"src\", src);","});"]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"remove","lines":["o"],"id":61},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"remove","lines":["e"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"remove","lines":["d"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"remove","lines":["i"]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"remove","lines":["v"]},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"remove","lines":["."]}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["#"],"id":62},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["m"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["y"]}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["2"],"id":63}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":27},"action":"remove","lines":["bs."],"id":64}]]},"ace":{"folds":[],"scrolltop":322.140625,"scrollleft":0,"selection":{"start":{"row":30,"column":24},"end":{"row":30,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":167,"mode":"ace/mode/javascript"}},"timestamp":1559903005058,"hash":"4d45f021d2e62ee74ae44843e2b85294b9b7279e"}