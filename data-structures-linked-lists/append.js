/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let current = list;
  let next = list.next;
  while (next !== null) {
    current = next;
    next = current.next;
  }

  return current;
}
