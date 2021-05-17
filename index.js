require('dotenv').config();

// require your server and launch it
const server = require('./api/server');

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Message in the terminal. Server started on localhost: ${port}`)
})