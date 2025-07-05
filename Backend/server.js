const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const data = require('./dummy.json');
let index = 0;

app.use(cors());

app.get('/api/location', (req, res) => {
  const point = data[index];
  index = (index + 1) % data.length; 
  res.json(point);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});