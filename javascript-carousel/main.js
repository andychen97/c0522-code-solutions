var $img = document.querySelector('img');
var $circles = document.querySelectorAll('i.circle');
var $rightArrow = document.querySelector('i[id="right"]');
var $leftArrow = document.querySelector('i[id="left"]');
var intervalTime = setInterval(rightPic, 3000);
var $images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imageIndex = 0;

for (var i = 0; i < $circles.length; i++) {
  $circles[i].addEventListener('click', goToIndex);
  $circles[i].circleIndex = i;
}

function goToIndex(event) {
  imageIndex = event.currentTarget.circleIndex;
  $img.setAttribute('src', $images[imageIndex]);
  for (var i = 0; i < $circles.length; i++) {
    $circles[i].className = 'fa-regular fa-circle fa-sm circle';
  }
  $circles[imageIndex].className = 'fa-solid fa-circle fa-sm circle';
  clearInterval(intervalTime);
  intervalTime = setInterval(rightPic, 3000);
}

function rightPic() {
  if (imageIndex === $images.length - 1) {
    imageIndex = 0;
    $img.setAttribute('src', $images[0]);
    $circles[$images.length - 1].className = 'fa-regular fa-circle fa-sm circle';
    $circles[0].className = 'fa-solid fa-circle fa-sm circle';
  } else {
    imageIndex++;
    $img.setAttribute('src', $images[imageIndex]);
    for (var i = 0; i < $images.length; i++) {
      $circles[i].className = 'fa-regular fa-circle fa-sm circle';
    }
    $circles[imageIndex].className = 'fa-solid fa-circle fa-sm circle';
    clearInterval(intervalTime);
    intervalTime = setInterval(rightPic, 3000);
  }
}

$rightArrow.addEventListener('click', rightPic);

function leftPic() {
  if (imageIndex === 0) {
    imageIndex = 4;
    $img.setAttribute('src', $images[4]);
    $circles[0].className = 'fa-regular fa-circle fa-sm circle';
    $circles[4].className = 'fa-solid fa-circle fa-sm circle';
  } else {
    imageIndex--;
    $img.setAttribute('src', $images[imageIndex]);
    for (var i = 0; i < $images.length; i++) {
      $circles[i].className = 'fa-regular fa-circle fa-sm circle';
    }
    $circles[imageIndex].className = 'fa-solid fa-circle fa-sm circle';
    clearInterval(intervalTime);
    intervalTime = setInterval(rightPic, 3000);
  }
}

$leftArrow.addEventListener('click', leftPic);
