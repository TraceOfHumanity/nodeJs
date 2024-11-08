const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Home page");
  } else if (request.url === "/about") {
    response.end("About page");
  } else if (request.url === "/contact") {
    response.end("Contact page");
  } else {
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
