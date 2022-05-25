var $h1 = document.querySelector('h1');
var $text = $h1.textContent;
var fullMessage = '';
for (var i = 0; i < $text.length; i++) {
  var wrapped = '<span>' + $text[i] + '</span>';
  fullMessage += wrapped;
}

$h1.innerHTML = fullMessage;

var $span = document.querySelectorAll('span');
$span.addEventListener('keydown', function (event) {
});
