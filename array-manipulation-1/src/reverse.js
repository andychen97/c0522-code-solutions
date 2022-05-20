/* exported reverse */

/*
- define a new function with 1 parameter of array
- create an empty array an store in new variable
- use a for loop to push values of array[i] starting at the end of the array to
reverse the order
- return new array
*/

function reverse(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
