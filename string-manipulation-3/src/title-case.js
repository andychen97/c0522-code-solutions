/* exported titleCase */

// /*
//  - define a function with 1 parameter (string)
//  - lowercase everything and assign it to a variable
//  - uppercase the first letter of the entire string
//  - use a loop to check if words are not supposed to be capitalized and capitialize first letter of each word if needed
//  - use a loop to check for dashes and capitalize that first letter
//  - use a conditional statement to capitalize acronyms
//  -return APA string;
// */

function titleCase(string) {
  var noCap = ['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];
  var lowered = string.toLowerCase();
  lowered = lowered.replace('javascript', 'JavaScript');
  var array = lowered.split(' ');
  array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'api') {
      array[i] = array[i].toUpperCase();
    }
    if (!(noCap.includes(array[i]))) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    for (var k = 0; k < array[i].length; k++) {
      if (array[i][k - 1] === '-') {
        array[i] = array[i].slice(0, k) + array[i][k].toUpperCase() + array[i].slice(k + 1);
      }
    }
  }
  var newString = array.join(' ');
  var splitColon = newString.split(':');
  for (var l = 0; l < splitColon.length; l++) {
    if (splitColon[l].charAt(0) === ' ') {
      splitColon[l] = ' ' + splitColon[l].charAt(1).toUpperCase() + splitColon[l].slice(2);
    }
  }
  var finalString = splitColon.join(':');
  return finalString;
}
