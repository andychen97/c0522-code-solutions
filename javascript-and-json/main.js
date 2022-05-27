var books = [
  {
    isbn: '234234-435',
    title: 'book one',
    author: 'first person'
  },
  {
    isbn: '4355645-664',
    title: 'book two',
    author: 'second person'
  },
  {
    isbn: '234234-435',
    title: 'book three',
    author: 'third person'
  }
];

console.log('value of books:', books);
console.log('typeof books:', typeof books);

var bookStrings = JSON.stringify(books);
console.log('typeof JSON.stringify books:', typeof bookStrings);

var string = '{"id": 1, "name": "Andy Chen"}';
console.log('typeof JSON string:', typeof string);
var parseJSON = JSON.parse(string);
console.log('typeof parseJSON:', typeof parseJSON);
