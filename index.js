// implement your API here
const db = require('./data/db.js');
const express = require('express');

const server = express();

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({error: "The users information could not be retrieved."}));
});

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => user
          ? res.status(200).json(user)
          : res.status(404).json({error: "The user with the specified ID does not exist."}))
    .catch(error => res.status(500).json({error: "The user information could not be retrieved."}));
});

server.listen(5000, () => {
    console.log('sever running on port 5000');
});

