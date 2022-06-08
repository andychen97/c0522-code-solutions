setTimeout(changeText, 2000);

var $message = document.querySelector('.message');
function changeText() {
  $message.textContent = 'Hello';
}
