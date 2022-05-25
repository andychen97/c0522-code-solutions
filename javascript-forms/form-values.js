var $form = document.getElementById('contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var $user = $form.elements.name.value;
  var $email = $form.elements.email.value;
  var $message = $form.elements.message.value;
  var values = { name: $user, email: $email, message: $message };
  console.log(values);
});
