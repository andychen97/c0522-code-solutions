/* exported reverseWord */

/*
- define a function with 1 parameter of word
- create an empty array and store into variable
- use a for loop to push letter backwards into array
- use join method to join array back into a string
- return string
*/

function reverseWord(word) {
  var array = [];
  for (var i = word.length - 1; i >= 0; i--) {
    array.push(word.charAt(i));
  }
  var joined = array.join('');
  return joined;
}
