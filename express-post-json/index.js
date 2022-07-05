const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const id in grades) {
    newArray.push(grades[id]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);

  // MY SOLUTION
  // const newGrades = {
  //   id: nextId++,
  //   name: req.body.name,
  //   course: req.body.course,
  //   score: req.body.score
  // };
  // grades.id = newGrades;
  // res.status(201).send(newGrades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
