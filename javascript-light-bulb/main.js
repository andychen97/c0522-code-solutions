var lightSwitch = true;
var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');
$circle.addEventListener('click', function () {
  if (lightSwitch === true) {
    $circle.className = 'col-1 circle';
    $background.className = 'light-background';
    lightSwitch = false;
  } else {
    $circle.className = 'col-1 black-circle';
    $background.className = 'dark-background';
    lightSwitch = true;
  }
});
