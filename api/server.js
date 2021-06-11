const express = require('express');
// const morgan = require('morgan');
const { logger } = require('./middleware/middleware');
// const deny = require('./middleware/deny');
const usersRouter = require('./users/users-router');
const server = express();

server.use(express.json());
// server.use(deny())
server.use(logger);
server.use('/api/users', usersRouter);
// install the morgan middleware using the combined format
//     server.use(morgan("combined"))



// function auth(req, res, next) {
//   if (req.url === '/mellon') {
//     next();
//   } else {
//     res.send('You shall not pass!');
//   }
// }


// server.get('/mellon', auth, (req, res) => {
//   console.log('Gate opening...');
//   console.log('Inside and safe!');
//   res.send('Welcome Traveler!');
//});

server.get('/', (req, res) => {
  res.status(200).send(`<h2>Let's write some middleware! YAY!</h2>`);
});

server.use(function (req, res) {
  res.status(404).send(`Ain't nobody got time for dat! Give me a real page!`);
});

module.exports = server;
