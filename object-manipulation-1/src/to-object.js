/* exported toObject */

/*
- define a new function with 1 parameter (keyValuePair)
- create an empty object and assign it to a new variable
- use indexes of arrays to assign properties and values to object
*/

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
