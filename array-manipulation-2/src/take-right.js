/* exported takeRight */
/*
- define a function with 2 parameters (array, count)
- create an empty array and store in new variable
- check if count is greater than the length of the array
- if so then make count = length of the array
- use a for loop to push values from the right
- return array
*/

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
