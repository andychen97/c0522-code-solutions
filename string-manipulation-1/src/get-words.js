/* exported getWords */

/*
- define a function with 1 parameter of string
- use split method to split by blank space
- use an if statement to check for blanks
- return array
*/

function getWords(string) {
  var array = string.split(' ');
  if (string === '') {
    return [];
  }
  return array;
}
