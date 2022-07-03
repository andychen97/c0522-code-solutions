const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const newArray = [];

app.get('/api/grades', (req, res) => {
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {

  grades = {
    id: nextId++,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  newArray.push(grades);
  res.status(201).send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
