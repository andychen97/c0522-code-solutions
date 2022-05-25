/* exported lastChars */

/*
- define a function with 2 parameters (length, string)
- use an if statement to check if length is greater than string
  - if so the return string
  - if not then use the slice method with 1 argument string.length - length
- return string
*/

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    return string.slice(string.length - length);
  }
}
