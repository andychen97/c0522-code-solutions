/* exported includes */

/*
- define a function with 2 parameters (array, value)
- use for loop to check if value in array
- return true/false
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
