const fs = require('fs');
const randomText = process.argv[2] + '\n';

fs.writeFile('note.txt', randomText, 'utf8', err => {
  if (err) throw err;
});
