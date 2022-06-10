/* exported union */
/*
 - define a function with 2 parameters (first, second)
 - clone first array to new array
 - use a loop to check if second array does not contains elements in the first array
  - if so then push element into new array
- return new array
*/

function union(first, second) {
  var newArray = [...first];
  for (var i = 0; i < second.length; i++) {
    if (!(newArray.includes(second[i]))) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
