const http = require('http');

const server = http.createServer((req, res) => {
  // Set header respons HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World\\n');
});

const port = 2000;

server.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});