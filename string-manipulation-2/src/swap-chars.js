/* exported swapChars */
/*
- define a function with 3 parameters (firstIndex, secondIndex, string)
- store value of firstIndex in a new variable
- store value of secondIndex in a new variable
- split variable into a new array
- replace value with stored value
- join array back into a string
- return string;
*/
function swapChars(firstIndex, secondIndex, string) {
  var first = string.charAt(firstIndex);
  var second = string.charAt(secondIndex);
  var arraySplit = string.split('');
  arraySplit.splice(firstIndex, 1, second);
  arraySplit.splice(secondIndex, 1, first);
  var joined = arraySplit.join('');
  return joined;
}
