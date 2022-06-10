/* exported flatten */

/*
- define a function with 1 parameter (array)
- create an empty array
- use a loop to iterate over array
- use a conditional to check if element in the array is an array
  - if it is then use another loop to push value into empty array
  - if not then use first loop to push element into array
- return new array
*/

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
