const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

var gradesArray = Object.keys(grades).map(key => {
  return grades[key];
});

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  for (var i = 0; i < gradesArray.length; i++) {
    if (Number(gradesArray[i].id) === Number(req.params.id)) {
      gradesArray.splice(i, 1);
      res.sendStatus(204);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
