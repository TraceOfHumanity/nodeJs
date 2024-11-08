// const http = require("http");
// const fs = require("fs");

// const homePage = fs.readFileSync("index.html");
// const aboutPage = fs.readFileSync("about.html");
// const contactPage = fs.readFileSync("contact.html");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.end(homePage);
//   } else if (request.url === "/about") {
//     response.end(aboutPage);
//   } else if (request.url === "/contact") {
//     response.end("Contact page");
//   } else {
//     response.writeHead(404, {"Content-Type": "text/html"});
//     response.end("Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
  // res.send("Home page");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
