/* exported getValues */

/*
- define a new function with 1 parameter (object)
- create an empty array and assign it to a new variable
- use a for in loop to push values into array
- return array
*/

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
