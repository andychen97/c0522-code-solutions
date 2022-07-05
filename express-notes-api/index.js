const express = require('express');
const app = express();
const dataJSON = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesJSON = [];
  for (const key in dataJSON.notes) {
    notesJSON.push(dataJSON.notes[key]);
  }
  if (notesJSON.length > 0) {
    res.status(200).send(notesJSON);
  } else {
    res.status(404);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || isNaN(id)) {
    const message400 = { error: 'id must be a positive integer' };
    res.status(400).send(message400);
  } else if (!(dataJSON.notes[id])) {
    const message404 = { error: `cannot find note with id ${id}` };
    res.status(404).send(message404);
  } else {
    res.status(200).send(dataJSON.notes[id]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
