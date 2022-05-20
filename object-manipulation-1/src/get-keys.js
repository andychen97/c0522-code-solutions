/* exported getKeys */

/*
- define a new function with 1 parameter (object)
- create an empty array and assign it to a new variable
- use a for in loop to push key into array
- return array
*/

function getKeys(object) {
  var properties = [];
  for (var key in object) {
    properties.push(key);
  }
  return properties;
}
