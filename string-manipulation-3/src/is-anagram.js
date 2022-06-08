/* exported isAnagram */

/*
- define a function with 2 parameters (firstString, secondString)
- remove spaces from both strings
- set counter equal to string with highest length count
- use a loop to compare letters in both strings
  - if letter is in string 1 and in string 2, remove letter
  - decerement counter
- return true/false if counter reaches 0
*/

function isAnagram(firstString, secondString) {
  var noSpace1 = firstString.replaceAll(' ', '');
  var noSpace2 = secondString.replaceAll(' ', '');
  var count = Math.max(noSpace1.length, noSpace2.length);
  for (var i = 0; i < noSpace1.length; i++) {
    if (noSpace2.includes(noSpace1[i])) {
      noSpace2 = noSpace2.replace(noSpace1[i], '');
      count--;
    }
  }
  return count === 0;
}
