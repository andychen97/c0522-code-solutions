/* exported truncate */
/*
- define a new function with 2 parameters (length, string)
- use slice method to start from index[0] to index[length]
- concat 3 periods to the end of the sliced string
-return new string
*/

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
