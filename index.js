// implement your API here
const db = require('./data/db.js');
const express = require('express');

const server = express();

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({error}));
});

server.listen(5000, () => {
    console.log('sever running on port 5000');
});

