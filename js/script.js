
/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function () {
  var $oneList = $('.one');
  var $tab_1 = $('.tab_1')

  $oneList.on('click', function () {
    $(this).css({
      background: 'blue'
    })
    $tab_1.css({
      display: 'block'
    })
  })
});
