var http = require('http');
var os = require('os');
// Instantiate a JTalk object to process requests
var server = smalltalk.TrivialServer._new();
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Let the JTalk object process it
  res.end(server._process_(req));
}).listen(1337, "127.0.0.1");
console.log('TrivialServer running at http://127.0.0.1:1337/');
