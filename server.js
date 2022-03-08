// import http from 'http';
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
})
server.listen(3000, 'localhost', () => {
    console.log('Listening from port 3000');
})
// console.log('Hello world');