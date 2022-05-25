var count = 0;
var $span = document.querySelectorAll('span');
document.addEventListener('keydown', function (event) {
  if (event.key === $span[count].textContent) {
    $span[count].className = 'green-text';
    $span[count + 1].className = 'underscore';
    count++;
  } else {
    $span[count].className = 'underscore red-text';
  }
});
