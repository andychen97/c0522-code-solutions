var countInterval = setInterval(countdown, 1000);
var $countdown = document.querySelector('.countdown-display');
var counter = 4;
$countdown.textContent = counter;

function countdown() {
  $countdown.textContent = counter;
  counter--;
  if (counter === -1) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countInterval);
  }
}
