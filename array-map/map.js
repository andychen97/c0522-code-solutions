function map(array, transform) {
  var tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(transform(array[i]));
  }
  return tempArray;
}
