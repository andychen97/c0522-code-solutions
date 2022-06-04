/* exported pick */

/*
 - define a function with 2 parameters (source, keys)
 - create an empty object and assign it to a new variable
 - use a for loop to check if key[i] is in source
 - add property and value to empty object
 - return object
*/

function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      obj[keys[i]] = source[keys[i]];
    }
  }
  return obj;
}
