/* exported defaults */

/*
- define a function with 2 parameters (target, source)
- use a for..in.. loop to check if source is in target
- if not then add it to target
*/

function defaults(target, source) {
  for (var sourceKey in source) {
    if (!(sourceKey in target)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
