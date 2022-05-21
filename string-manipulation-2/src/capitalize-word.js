/* exported capitalizeWord */

/*
- define function with 1 parapeter (word)
- lowercase the word and assign it to new variable
- check if variable is javascript, if so then return 'JavaScript'
  - if not then uppercase the first letter and assign that 1 letter to new variable
- slice from 1 to length of lowercase word and concatenate to end of uppercase letter
- return Captilized Word
*/

function capitalizeWord(word) {
  var lower = word.toLowerCase();
  if (lower === 'javascript') {
    return 'JavaScript';
  } else {
    var Upper = lower[0].toUpperCase();
    return Upper + lower.slice(1);
  }
}
