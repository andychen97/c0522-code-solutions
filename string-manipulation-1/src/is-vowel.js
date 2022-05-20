/* exported isVowel */

/*
- define a function
- store vowels in a new array
- lowercase the letters
- use indexOf to see if letter in array
- return boolean
*/

function isVowel(character) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var lower = character.toLowerCase();
  return vowel.indexOf(lower) > -1;
}
