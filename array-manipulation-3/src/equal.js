/* exported equal */

/*
 - define a function with 2 parameters (first, second)
 - check if both arrays are the same length
 - use a loop to check if first[i] is strictly equal to second[i]
 - return true/false
*/

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
