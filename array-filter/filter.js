function filter(array, predicate) {
  var tempArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      tempArr.push(array[i]);
    }
  }
  return tempArr;
}
