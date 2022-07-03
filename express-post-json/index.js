const express = require('express');
const app = express();

// const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (var key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.send('Got a POST request');
  res.send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
