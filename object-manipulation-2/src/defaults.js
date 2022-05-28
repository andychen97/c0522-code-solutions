/* exported defaults */

function defaults(target, source) {
  for (var sourceKey in source) {
    if (!(sourceKey in target)) {
      target[sourceKey] = source[sourceKey];
    }
  }
}
