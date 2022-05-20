/* exported compact */

/*
- define a new function
- create an empty array and store into new variable
- use a for loop to iterate through every index
- use an if conditional statement to check if array[i] is true or false
- push truthy values to new array
- return array
*/

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
