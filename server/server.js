const express = require('express');
const app = express();
const router = express.Router();
const dummyCards = require('./data/DummyData.js');

const PORT = process.env.PORT || 8080;
const db = require('../models');

// routes api end points
router.route('/api/cards')
  .get((req, res) => {
  res.json(dummyCards);
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`server running on ${PORT}`);
});

