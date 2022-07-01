const fs = require('fs');
const dataJSON = require('./data.json');

const stringifyCheckError = () => {
  const newObj = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('./data.json', newObj, err => {
    if (err) throw err;
  });
};

if (process.argv[2] === 'read') {
  for (var key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (process.argv[2] === 'create') {
  dataJSON.notes[dataJSON.nextId++] = process.argv[3];
  stringifyCheckError();
} else if (process.argv[2] === 'delete') {
  delete dataJSON.notes[process.argv[3]];
  stringifyCheckError();
} else if (process.argv[2] === 'update') {
  dataJSON.notes[process.argv[3]] = process.argv[4];
  stringifyCheckError();
}
