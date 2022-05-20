/* exported oddOrEven */
function oddOrEven(numbers) {
  var written = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      written.push('even');
    } else if (numbers[i] % 1 === 0) {
      written.push('odd');
    }
  }
  return written;
}
