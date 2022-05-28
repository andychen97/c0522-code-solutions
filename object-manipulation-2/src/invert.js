/* exported invert */

function invert(source) {
  var obj = {};

  for (var sourceKey in source) {
    var key = sourceKey;
    var value = source[sourceKey];
    obj[value] = key;
  }
  return obj;
}
