/* exported titleCase */

function titleCase(title) {
  // var emptyArray = [];
  // var array = title.toLowerCase().split(' ');
  var noCap = ['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet'];
  // var acro =
  // for (var i = 0; i < array.length; i++) {
  //   if (!(array[i].includes(noCap))) {
  //     emptyArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  //   }
  // }
  // return emptyArray.join(' ');
  var array = title.toLowerCase().split(' ');
  array[0].charAt(0).toUpperCase();
  for (var i = 0; i < array.length; i++) {
    // Use function that checks if array[i] equals to one of the words in noCap
    if (!(array[i] in noCap)) {
      var word = array[i];
      if (word.includes('-')) {
        word[0].toUpperCase();
        for (var k = 1; k < word.length; k++) {
          if (word[k - 1] === '-') {
            word[i].toUpperCase();
          }
        }
        array[i] = word;
      } else {
        array[i].charAt(0).toUpperCase();
      }
    }
  }

  return array.join(' ');
}

// [Speaking,Javascript:,an,in-depth,guide,for,programmers]

// In-Depth

// var array = title.toLowerCase().split(' ');
// array[0].charAt(0).toUpperCase();
// for (var i = 0; i < array.length; i++){
//   //Use function that checks if array[i] equals to one of the words in noCap
//   if(!(array[i] in noCap)){
//     var word = array[i];
//     if (word.includes('-')) {
//       word[0].toUpperCase();
//       for(var i = 1; i < word.length; i++) {
//         if(word[i-1] == '-') {
//           word[i].toUpperCase();
//         }
//       }
//     }
//     else:
//       array[i].charAt(0).toUpperCase();
//   }
// }

// return array.join(' ');

// newTitle = title[0].toUpperCase
// for i in range(1, len(title)):
//   if title[i - 1] == " " or title[i - 1] == "-":
//     newTitle += title[i].toUpperCase
//   else:
//     newTitle += title[i]
