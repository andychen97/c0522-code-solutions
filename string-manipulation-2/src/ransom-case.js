/* exported ransomCase */

/*
- define a function with 1 parameter(string)
- assign an empty string into a variable
- change string to all lowercase letters
- use a for loop and  if statement to check if index mod 2 = 0
  - if so then add to strong
  - if not then upper case then add to string
- return string
*/

function ransomCase(string) {
  var weirdString = '';
  var lower = string.toLowerCase();
  for (var i = 0; i < lower.length; i++) {
    if (i % 2 === 0) {
      weirdString += lower[i];
    } else {
      weirdString += lower[i].toUpperCase();
    }
  }
  return weirdString;
}
