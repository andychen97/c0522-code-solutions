/* exported take */

/*
- define a function with 2 parameters (array, count)
- create an empty array and assign it to a variable
- use and if statement to check if count > length of array
- if so then make count = length of array
- if not then use a for loop to push values up to count into new array
- return new array
*/

function take(array, count) {
  var arrayCount = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = 0; i < count; i++) {
    arrayCount.push(array[i]);
  }
  return arrayCount;
}
