const http = require('http');
let portNo = 3000;

const serverHandler = (request, response) => {
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>Http Server Created using Nodejs!</h1>');
    response.end();
}

http.createServer(serverHandler).listen(portNo,() => console.log('App is Running'));
