const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  res.end('hello world\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
