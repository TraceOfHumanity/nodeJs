const express = require("express");
const app = express();
const path = require("path");
const expressEdge = require("express-edge");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(expressEdge);
app.set("views", path.resolve(__dirname, "views"));


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
