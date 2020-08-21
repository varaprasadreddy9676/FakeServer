const jsonServer  = require('json-server');

const server      = jsonServer.create();
const router      = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(5000, function () {
  console.log('Mock Server is running');
});