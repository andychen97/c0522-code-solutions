/* exported dropRight */
/*
- define a function with 2 parameters (array, count)
- create an empty array and store in new variable
- check if count is greater than the length of the array
- if so then make count = length of the array
- use a for loop to push values from the left up until array.length - count
- return array
*/
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
