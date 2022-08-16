const http = require('http');

const server = http.createServer((request, response) => {
    const status = 200; //ok 
    const mimeType =  {'Content-Type' : 'text/html'}; // Indica el formato de archivo de respuesta
    response.writeHead(status, mimeType);
    response.write('<html> <body> Hola Alva </body> </html>');
    response.end();
});

server.listen(8000); //Puerto de espera de respuesta
console.log('El servidor fue iniciado...');