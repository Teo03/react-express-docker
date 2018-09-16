var express = require('express');
var path = require('path');
var cors = require('cors');
var PORT = process.env.PORT || 9000;
var app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send('Hi from Express');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
