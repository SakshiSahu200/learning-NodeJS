const http = require('http'); // importing http module - global

const routes = require('./routes')  //custom file
// there are some more modules like http, https, fs, path, os
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
