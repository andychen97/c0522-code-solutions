/* exported invert */

/*
- define a new function with 1 parameter (source)
- create an empty object and assign it to a new variable
- use a for..in.. loop to invert key and value pair
- store inverted data in new object
- return object
*/

function invert(source) {
  var obj = {};

  for (var sourceKey in source) {
    var key = sourceKey;
    var value = source[sourceKey];
    obj[value] = key;
  }
  return obj;
}
