/* exported capitalize */

/*
- define a function with 1 parameter of word
- lower case every letter first and store value in new variable
- capitalize the first letter and store it in a new variable
- concat the capitalized letter with the lowercase letters using slice
- return character
*/

function capitalize(word) {
  var lower = word.toLowerCase(word);
  var capitalized = lower.charAt(0).toUpperCase();
  var joined = capitalized + lower.slice(1);
  return joined;
}
