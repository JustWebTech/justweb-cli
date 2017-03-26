var html = require('html');

var server = html.createServer(function(req, res) {
    res.writeHead(200, 'content-type: plain-text');
    res.end('Hello World!')
});

server.listen('8000');