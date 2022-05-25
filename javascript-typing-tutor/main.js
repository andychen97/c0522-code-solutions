var $h1 = document.querySelector('h1');
var $text = $h1.textContent;
var fullMessage = '';
for (var i = 0; i < $text.length; i++) {
  // var wrapped = '<span>' + $text[i] + '</span>';
  // fullMessage += wrapped;
}

$h1.innerHTML = fullMessage;

var $span = document.getElementsByTagName('span');

// var $span = document.querySelectorAll('span');
$h1.addEventListener('click', function (event) {
  for (var i = 0; i < $h1.length; i++) {
    if (event === $h1[i].textContent) {
      $span[i].className = 'green-text';
    }
  }
});

// var $h1Split = $h1.innerHTML.split('');
// for (var i = 0; i < $h1Split.length; i++) {
//   var $span = document.createElement('span');
//   $h1.appendChild($span);
//   $span.innertext = $h1Split[i];
// }

// console.log($h1Split[0]);
