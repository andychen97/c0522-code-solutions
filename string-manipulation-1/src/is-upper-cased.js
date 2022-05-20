/* exported isUpperCased */

/*
- define a function with 1 parameter of word
- uppercase the parameter and store it in a new variable
- compare the parameter with value in variable
- return boolean
*/

function isUpperCased(word) {
  var upper = word.toUpperCase(word);
  if (upper === word) {
    return true;
  } else {
    return false;
  }
}
