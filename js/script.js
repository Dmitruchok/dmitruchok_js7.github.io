
/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});*/

$(function () {
  var $oneList = $('.one_link'),
  $twoList = $('.two_link'),
  $threeList = $('.three_link'),
  $tab_1 = $('.tab_1'),
  $tab_2 = $('.tab_2'),
  $tab_3 = $('.tab_3');

  $oneList.on('click', function () {
    $(this).css({
      background: '#007fff'
    });
    $tab_1.css({
      display: 'block'
    });
    $twoList.css({
      background: '#fff'
    });
    $tab_2.css({
      display: 'none'
    });
    $tab_3.css({
      display: 'none'
    });
  });

  $twoList.on('click', function () {
    $(this).css({
      background: '#007fff'
    });
    $tab_2.css({
      display: 'block'
    });
    $oneList.css({
      background: '#fff'
    });
    $threeList.css({
      background: '#fff'
    });
    $tab_1.css({
      display: 'none'
    });
    $tab_3.css({
      display: 'none'
    });
  });

  $threeList.on('click', function () {
    $(this).css({
      background: '#007fff'
    });
    $tab_3.css({
      display: 'block'
    });
    $oneList.css({
      background: '#fff'
    });
    $twoList.css({
      background: '#fff'
    });

    $tab_1.css({
      display: 'none'
    });
    $tab_2.css({
      display: 'none'
    });
  });

});
