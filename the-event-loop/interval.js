var count = 3;
var countdown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    var blastOff = setInterval(() => {
      console.log('Blast off!');
      clearInterval(countdown);
      clearInterval(blastOff);
    }, 1000);
  }
}, 1000);
