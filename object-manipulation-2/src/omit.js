/* exported omit */

/*
 - define a function with 2 parameters (source, keys)
 - create an empty object and assign it to a new variable
 - use a for loop to check if key[i] is in source
 - add property and value that are not in the array to empty object
 - return object

*/

function omit(source, key) {
  var obj = {};
  for (var sourceKey in source) {
    if (!key.includes(sourceKey)) {
      obj[sourceKey] = source[sourceKey];
    }
  }
  return obj;
}

// function omit(source, key) {
//   var obj = {};
//   for (var sourceKey in source) {
//     var isInsideArray = isSourceKeyInKeyArray(sourceKey, key);
//     if (!isInsideArray) {
//       obj[sourceKey] = source[sourceKey];
//     }
//   }
//   return obj;
// }

// function isSourceKeyInKeyArray(sourceKey, keyArray) {
//   var isInsideArray = false;
//   for (var i = 0; i < keyArray.length; i++) {
//     if (sourceKey === keyArray[i]) {
//       isInsideArray = true;
//     }
//   }
//   return isInsideArray;
// }
