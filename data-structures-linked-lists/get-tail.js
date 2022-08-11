/* exported getTail */

function getTail(list) {
  let current = list;
  let next = list.next;
  while (next !== null) {
    current = next;
    next = current.next;
  }
  return current.data;

  // while (list.next) list = list.next;
  // return list.data;
}
