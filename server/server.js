const express = require('express');
const app = express();
const router = express.Router();
const bp = require('body-parser');
// const dummyCards = require('./data/DummyData.js');
const db = require('../models');
const Task = db.Task;

const PORT = process.env.PORT || 8080;

app.use(bp.urlencoded());


// routes api end points
app.get('/api/cards', (req, res) => {
  Task.findAll()
  .then((cards) => {
    res.json(cards);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.post('/api/cards', (req, res) => {
  Task.create({
    title: req.body.title,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  })
  .then((cards) => {
    res.redirect('/api/cards');
  });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`server running on ${PORT}`);
});

