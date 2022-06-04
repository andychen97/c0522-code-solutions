/* exported isPalindromic */

/*
- define function with 1 parameters (string)
- remove spaces from string
  - loop over new string to reverse string
- return true/false if new string strictly equals reversed string
*/

function isPalindromic(string) {
  var noSpace = string.replaceAll(' ', '');
  var pali = '';
  for (var i = noSpace.length - 1; i >= 0; i--) {
    pali += noSpace[i];
  }
  return noSpace === pali;
}
