const http = require('http');
const routes = require('./routes.js');

const server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(routes.home(' Tetsuhiro Kodo'));

    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    rres.write(routes.about(' Tetsuhiro Kodo'));

    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(routes.contact(' Tetsuhiro Kodo'));

    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(routes.gallery(' Tetsuhiro Kodo'));

    res.end();
  } else res.end('Invalid Request');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
