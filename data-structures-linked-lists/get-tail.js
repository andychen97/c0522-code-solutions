/* exported getTail */

function getTail(list) {
  let prev = list;
  while (prev.next !== null) {
    prev = prev.next;
  }
  return prev;
}
