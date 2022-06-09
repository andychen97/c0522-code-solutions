/* exported zip */

/*
 - define a function with 2 parameters (first, second)
 - find the shortest array
 - create an empty array
 - use a loop to push an array of paired indexes
 - return array
*/

function zip(first, second) {
  var newArray = [];
  var shortest = Math.min(first.length, second.length);
  for (var i = 0; i < shortest; i++) {
    var tempArray = [];
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    newArray.push(tempArray);
  }
  return newArray;
}
