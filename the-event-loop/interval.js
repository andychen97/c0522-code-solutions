var count = 3;
var countdown = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
