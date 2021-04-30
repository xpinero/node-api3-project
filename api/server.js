const express = require('express');

const server = express();

server.use(express.json());

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here



server.get('/', (req, res) => {
  res.status(200).send(`<h2>Let's write some middleware! YAY!</h2>`);
});

server.use(function (req, res) {
  res.status(404).send(`Ain't nobody got time for dat! Give me a real page!`);
});

module.exports = server;
