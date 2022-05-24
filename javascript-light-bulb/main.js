var clickCount = 0;
var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');
$circle.addEventListener('click', function () {
  if (clickCount % 2 === 0) {
    $circle.className = 'col-1 black-circle';
    $background.className = 'dark-background';
    clickCount++;
  } else {
    $circle.className = 'col-1 circle';
    $background.className = 'light-background';
    clickCount++;
  }
});
