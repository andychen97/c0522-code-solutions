/* exported capitalizeWords */

/*
- define a function with 1 parameter (string)
- lower case every single word and assign it to a new variable
- split the string by spaces and assign it to new variable (array)
- declare a new array
- use a for loop to uppercase each first letter of each word
- join the array and convert back into a string
- return string

*/
function capitalizeWords(string) {
  var lower = string.toLowerCase();
  var splitString = lower.split(' ');
  var capitalized = [];
  for (var i = 0; i < splitString.length; i++) {
    capitalized.push(splitString[i][0].toUpperCase() + splitString[i].slice(1));
  }
  var joined = capitalized.join(' ');
  return joined;
}
