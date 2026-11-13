var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello World!<br>Tôi Là Phạm Hoàng Hải!<br>CD-CNTT18A13!');
}).listen(3000);