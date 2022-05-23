/* exported numVowels */

/*
- define a function with 1 parameter(string)
- declare a new variable with a value of 0
- create an array with vowels and assin it to a new variable
- lowercase the letters and split into a new array by letters
- use and if statement to check for vowels and increment count if any
- return count
*/

function numVowels(string) {
  var count = 0;
  var vowel = 'aeiou';
  var lower = string.toLowerCase();
  for (var i = 0; i < lower.length; i++) {
    if (vowel.includes(lower[i])) {
      count++;
    }
  }
  return count;
}
