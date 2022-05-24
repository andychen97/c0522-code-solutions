var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');
$circle.addEventListener('click', function () {
  if ($circle.className === 'col-1 black-circle') {
    $circle.className = 'col-1 circle';
    $background.className = 'light-background';
  } else {
    $circle.className = 'col-1 black-circle';
    $background.className = 'dark-background';
  }
});
