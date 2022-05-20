/* exported oddOrEven */
function oddOrEven(numbers) {
  var written = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      written.push('even');
    } else {
      written.push('odd');
    }
  }
  return written;
}
