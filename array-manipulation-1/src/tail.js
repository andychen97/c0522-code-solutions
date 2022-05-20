/* exported tail */

/*
- define a new function with 1 parameter of array
- create an empty array an store in new variable
- use a for loop to push values of array[i] starting at index 1
- return new array
*/

function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
