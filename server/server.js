const express = require('express');
const app = express();
const dummyCards = require('./data/DummyData.js');
const PORT = process.env.PORT || 8080;
// const CONFIG = require('/.config/config.json');

// routes api end points
app.get('/api/cards', (req, res) => {
  res.json(dummyCards);
});

const server = app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

