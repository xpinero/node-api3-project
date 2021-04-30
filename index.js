// require your server and launch it
const server = require('./api/server');

const port = 8000;

server.listen(port, () => {
  console.log('Message in the terminal. Server started on localhost: 8000')
})