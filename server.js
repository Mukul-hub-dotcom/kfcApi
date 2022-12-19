const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const contact=jsonServer.router('contacto.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(contact);

server.listen(port);
