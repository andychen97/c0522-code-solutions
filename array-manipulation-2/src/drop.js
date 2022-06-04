/* exported drop */

/*
- define a function with 2 parameters (array, count)
- create an empty array and assign it to a variable
- use and if statement to check if count > length of array
- if so then make count = length of array
- if not then use a for loop to push values starting from count into new array
- return new array
*/

function drop(array, count) {
  var arrayCount = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = count; i < array.length; i++) {
    arrayCount.push(array[i]);
  }
  return arrayCount;
}
