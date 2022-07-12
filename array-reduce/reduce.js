// declare a new variable named previous
// check if the intialValue is provided
// assign initialValue as previous and start your index at 0
// otherwise if it wasnt, assign the first element to previous and start your index at 1
// loop through the array starting at index
// pass the previous and current array element (at i) to combine
// assign the return of combine back to previous
// return previous

function reduce(array, reducer, initialValue) {
  let index = 0;
  let previous = initialValue;
  if (arguments.length < 3) {
    index = 1;
    previous = array[0];
  }
  for (let i = index; index < array.length; i++) {
    previous = reducer(previous, array[i]);
  }
  return previous;
}

// using reduced to recreate filter method
function filter(array, predicate) {
  return array.reduce((filtered, element) => {
    if (predicate(element)) {
      filtered.push(element);
    }
    return filtered;
  });
}

// using reduced to recreate map method
function map(array, transform) {
  return array.reduce((mapped, element) => {
    mapped.push(transform(element));
    return mapped;
  }, []);
}
