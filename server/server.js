const express = require('express');
const app = express();
const router = express.Router();
const bp = require('body-parser');
const dummyCards = require('./data/DummyData.js');
const db = require('../models');
const Task = db.Task;

const PORT = process.env.PORT || 8080;

app.use(bp.urlencoded());


// routes api end points
app.get('/api/cards', (req, res) => {
  console.log(`api woorking`);
  Task.findAll()
  .then((cards) => {
    res.json(cards);
  })
  .catch((err) => {
    console.log(err);
  });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`server running on ${PORT}`);
});

