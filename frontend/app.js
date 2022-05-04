const express = require("express");
const morgan = require("morgan");
const app = express();

const path = require("path");

app.use(morgan("dev"));

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('build'))
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
//     })
// }

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port: ", port);
});