/* exported unique */

/*
- define a function with 1 parameter (array)
- create an empty array;
- use a loop to see if array element is in the new array
  - if not then add that element to the new array
- return new array
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!(newArray.includes(array[i]))) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
