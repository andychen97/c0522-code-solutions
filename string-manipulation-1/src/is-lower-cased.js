/* exported isLowerCased */

/*
- define a function with 1 parameter of word
- lowercase the parameter and store it in a new variable
- compare the parameter with value in variable
- return boolean
*/

function isLowerCased(word) {
  var lower = word.toLowerCase(word);
  if (lower === word) {
    return true;
  } else {
    return false;
  }
}
