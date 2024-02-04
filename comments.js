// Create web server

// Import the 'http' module
const http = require("http");

// Create a server and define a callback function to handle requests
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response
  res.end("Hello, this is a simple web server!");
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// wow this is taking long!
