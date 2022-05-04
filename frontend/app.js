const express = require("express");
const morgan = require("morgan");
const app = express();

const path = require("path");

app.use(morgan("dev"));

// const resumeRouter = require("./routes/resume.router")

// app.use("/", resumeRouter)

// const sayHello = (req, res, next) => {
//     res.send("Hello!")
// }

// app.get("/hello", sayHello)

app.use(express.static("build"));
app.get("*", (req, res) => {
  req.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// const load = (req, res) => {
//     req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// }

// app.get('/', load)
// app.get("/resume", load)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('build'))
//     app.get('/', (req, res) => {
//         req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
//     })
//     app.get("/resume", (req, res) => {
//         req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
//     })
// }

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port: ", port);
});

// app.get("/resume", (req, res) => {
//     console.log('Here')
//     res.send("Hi")
// })
