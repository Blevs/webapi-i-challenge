// implement your API here
const db = require('./data/db.js');
const cors = require('cors');
const express = require('express');

const server = express();
server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json({error: "The users information could not be retrieved."}));
});

server.post('/api/users', (req, res) => {
  if (req.body.name && req.body.bio) {
    db.insert(req.body)
      .then(({id}) => db.findById(id)
            .then(user => res.status(201).json(user))
            .catch(error => res.status(500).json({error: "User was created but an error occured while fetching their information.", id: id}))
            )
      .catch(error => res.status(500).json({error: "There was an error while saving the user to the database"}));
  } else {
    res.status(400).json({error: "Please provide name and bio for the user."});
  }
});

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => user
          ? res.status(200).json(user)
          : res.status(404).json({error: "The user with the specified ID does not exist."}))
    .catch(error => res.status(500).json({error: "The user information could not be retrieved."}));
});

server.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => user
          ? db.remove(id)
          .then(del => del ? res.status(200).json(user) : (void 0).throwError())
          .catch(error => res.status(500).json({error: "The user could not be removed"}))
          : res.status(404).json({error: "The user with the specified ID does not exist."}))
    .catch(error => res.status(500).json({error: "The user infromation could not be retrieved."}));
});

server.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (body && body.name && body.bio) {
    db.findById(id)
      .then(user => user
            ? db.update(id, body)
            .then(success => success
                  ? db.findById(id)
                  .then(newUser => res.status(200).json(newUser))
                  .catch(error => res.status(500).json({error: "User information update, but user information could not be retrieved"}))
                  : (void 0).throwError())
            .catch(error => res.status(500).json({error: "The user information could not be modified."}))
            : res.status(404).json({error: "The user with the specified ID does not exist."}))
      .catch(error => console.log(error) || res.status(500).json({error: "The user infromation could not be retrieved."}));
  } else {
    res.status(400).json({error: "Please provide name and bio for the user."});
  }
});


server.listen(5000, () => {
  console.log('sever running on port 5000');
});

