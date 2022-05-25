/* exported chunk */

/*
- define a function with 2 parameters (array, size)
- create a empty array and assign it to a new variable
- check if size > array.length, if so then return array
- use a for loop to create arrays within the array based on size
- return array
*/

function chunk(array, size) {
  var newArray = [];
  if (size > array.length) {
    return array;
  }

  for (var i = 0; i < array.length; i += size) {
    var sliced = array.slice(i, i + size);
    newArray.push(sliced);
  }
  return newArray;
}
