var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
        var attribute = event.target.getAttribute('data-view');
      } else {
        $tab[i].className = 'tab';
      }
    }
    for (var k = 0; k < $view.length; k++) {
      if ($view[k].getAttribute('data-view') === attribute) {
        $view[k].className = 'view';
      } else {
        $view[k].className = 'view hidden';
      }
    }
  }
});
