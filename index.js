// Importar o módulo HTTP do Node.js
const http = require('http');

// Definir o código da resposta
const server = http.createServer((req, res) => {
  // Definir o cabeçalho da resposta HTTP com o código de status 200 (OK) e o tipo de conteúdo como texto/plain
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Enviar a mensagem "Hello World!" como resposta
  res.end('Hello World!\n');
});

// Escutar na porta 1337
server.listen(1337, '0.0.0.0', () => {
  console.log('Servidor rodando em http://localhost:1337/');
});
