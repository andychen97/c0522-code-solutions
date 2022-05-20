/* exported initial */

/*
- define a new function with 1 parameter of array
- create an empty array an store in new variable
- use a for loop to push values of array[i] starting at index 0
- limit condition to array.length - 1 to avoid last index
- return new array
*/

function initial(array) {
  var newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
