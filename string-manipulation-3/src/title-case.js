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
//     if (!(noCap.includes(lowered[i]))) {
//       lowered[i] = lowered[i].charAt(0).toUpperCase() + lowered[i].slice(1);
//     }
//   }
//   console.log(lowered);
//   //       if (lowered[i][word - 1] === '-') {
//   //         lowered[i][word] = lowered[i].charAt(lowered[i][word]).toUpperCase() + lowered[i].slice(lowered[i][word + 1]);
//   //       }
//   //       console.log(word);
//   //     }

//   //     // lowered[i] = lowered[i].charAt(0).toUpperCase() + lowered[i].slice(1);
//   //   }
//   //   console.log(lowered);

// // // for (var i = 0; i < string.length; i++) {
// // //   if (string[i - 1] === '-') {
// // //     var alteredString = newString.slice(0, i) + newString.charAt(i).toUpperCase() + newString.slice(i + 1);
// // //   }
// // // }
// }

// // //   var array = title.toLowerCase().split(' ');
// // //   array[0].charAt(0).toUpperCase();
// // //   for (var i = 0; i < array.length; i++) {
// // //     // Use function that checks if array[i] equals to one of the words in noCap
// // //     if (!(array[i] in noCap)) {
// // //       var word = array[i];
// // //       if (word.includes('-')) {
// // //         word[0].toUpperCase();
// // //         for (var k = 1; k < word.length; k++) {
// // //           if (word[k - 1] === '-') {
// // //             word[i].toUpperCase();
// // //           }
// // //         }
// // //         array[i] = word;
// // //       } else {
// // //         array[i].charAt(0).toUpperCase();
// // //       }
// // //     }
// // //   }

// // //   return array.join(' ');
// // // }

// // // [Speaking,Javascript:,an,in-depth,guide,for,programmers]

// // // In-Depth

// // // var array = title.toLowerCase().split(' ');
// // // array[0].charAt(0).toUpperCase();
// // // for (var i = 0; i < array.length; i++){
// // //   //Use function that checks if array[i] equals to one of the words in noCap
// // //   if(!(array[i] in noCap)){
// // //     var word = array[i];
// // //     if (word.includes('-')) {
// // //       word[0].toUpperCase();
// // //       for(var i = 1; i < word.length; i++) {
// // //         if(word[i-1] == '-') {
// // //           word[i].toUpperCase();
// // //         }
// // //       }
// // //     }
// // //     else:
// // //       array[i].charAt(0).toUpperCase();
// // //   }
// // // }

// // // return array.join(' ');

// // // newTitle = title[0].toUpperCase
// // // for i in range(1, len(title)):
// // //   if title[i - 1] == " " or title[i - 1] == "-":
// // //     newTitle += title[i].toUpperCase
// // //   else:
// // //     newTitle += title[i]
