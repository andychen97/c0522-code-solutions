const process = require('process');
const fs = require('fs');
const dataJSON = require('./data.json');

const action = process.argv[2];
const thirdArg = process.argv[3];
const update = process.argv[4];

if (action === 'read') {
  for (var key in dataJSON.notes) {
    console.log(`${key}: ${dataJSON.notes[key]}`);
  }
} else if (action === 'create') {
  dataJSON.notes[dataJSON.nextId++] = thirdArg;
  const newObj = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('./data.json', newObj, err => {
    if (err) throw err;
  });
} else if (action === 'delete') {
  for (const key in dataJSON.notes) {
    if (key === thirdArg.toString()) {
      delete dataJSON.notes[thirdArg];
    }
  }
  const newObj = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('./data.json', newObj, err => {
    if (err) throw err;
  });
} else if (action === 'update') {
  for (const key in dataJSON.notes) {
    if (key === thirdArg.toString()) {
      dataJSON.notes[key] = update;
    }
  }
  const newObj = JSON.stringify(dataJSON, null, 2);
  fs.writeFile('./data.json', newObj, err => {
    if (err) throw err;
  });
}
