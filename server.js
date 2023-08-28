const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Configurar encabezados de respuesta
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Enviar la respuesta
  res.end('Hello World!\n');
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
