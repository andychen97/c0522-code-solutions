/* exported intersection */
/*
- define a function with 2 parameters (first, second)
- create an empty array
- use a conditional nested in a loop to check if second array contains elements in first array
  - if so then push into new array
- return new array
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
