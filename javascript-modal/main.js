var $modal = document.querySelector('.modal');
var $button = document.querySelector('.open-modal');
var $modalBtn = document.querySelector('.modal-button');

$button.addEventListener('click', function () {
  $modal.className = 'modal display-block';
});

$modalBtn.addEventListener('click', function () {
  $modal.className = 'modal display-none';
});
