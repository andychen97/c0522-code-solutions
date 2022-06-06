// /* exported titleCase */

// /*
//  - define a function with 1 parameter (string)
//  - lowercase everything and assign it to a variable
//  - uppercase the first letter of the entire string
//  - use a loop to check if words are not supposed to be capitalized and capitialize first letter of each word if needed
//  - use a loop to check for dashes and capitalize that first letter
//  - use a conditional statement to capitalize acronyms
//  -return APA string;
// */

// function titleCase(string) {
//   var noCap = ['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];
//   var lowered = string.toLowerCase().split(' ');
//   lowered[0] = lowered[0].charAt(0).toUpperCase() + lowered[0].slice(1);
//   // console.log(lowered); OKAY
//   for (var i = 0; i < lowered.length; i++) {
//     if (lowered[i] === 'api') {
//       lowered[i] = lowered[i].toUpperCase();
//     }
//     if (lowered[i].includes('javascript')) {
//       lowered[i] = 'JavaScript';
//     }
//     // if (lowered[i - 1].includes(':')) {
//     //   lowered[i] = lowered[i].charAt(0).toUpperCase() + lowered[i].slice(1);
//     // }
//     for (var k = 0; k < lowered[i].length; k++) {
//       if (!(noCap.includes(lowered[i]))) {
//         lowered[i] = lowered[i].charAt(0).toUpperCase() + lowered[i].slice(1);
//       }
//       if (lowered[i][k - 1] === '-') {
//         lowered[i] = lowered[i].slice(0, k) + lowered[i][k].toUpperCase() + lowered[i].slice(k + 1);
//       }
//     }
//   }

//   console.log(lowered);
// }
