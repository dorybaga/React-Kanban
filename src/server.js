const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
// const CONFIG = require('/.config/config.json');

// routes api end points
app.get('/home', (req, res) => {
  res.send('GOT IT');
});

const server = app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

