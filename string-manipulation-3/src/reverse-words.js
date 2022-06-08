/* exported reverseWords */

/*
- define a function with 1 parameter (string)
- split sentence into words
- create a empty array
- create a empty string
- use a loop to loop over array
  - use another loop to loop over array[i]
  - reverse string
- push string to new array
- return joined array
*/

function reverseWords(string) {
  var array = string.split(' ');
  var emptyArray = [];
  var emptyString = '';
  for (var i = 0; i < array.length; i++) {
    for (var k = array[i].length - 1; k >= 0; k--) {
      emptyString += array[i][k];
    }
    emptyArray.push(emptyString);
    emptyString = '';
  }
  return emptyArray.join(' ');
}
