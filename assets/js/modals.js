/*$('#myModal').on('show', function () {
  $('modal-body').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/2S6k9mNFdtg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');  
});
$('#myModal').on('hide', function () {
  $('modal-body').html('');  
});

$('#myModal2').on('show', function () {
  $('modal-body2').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/69-m5BPa314" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');  
});
$('#myModal2').on('hide', function () {
  $('modal-body').html('');  
});


$('#myModal4').on('show', function () {
  $('modal-body').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/nKZvMHYsTfs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');  
});
$('#myModal4').on('hide', function () {
  $('modal-body').html('');  
});

$('#myModal5').on('show', function () {
  $('modal-body').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/ps3OgWXREiM" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                        + '<iframe width="560" height="315" src="https://www.youtube.com/embed/I1Vw66Zs0dQ" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');  
});
$('#myModal5').on('hide', function () {
  $('modal-body').html('');  
});*/

$('#myModal2').on('hide.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});