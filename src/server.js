/* 
  Functional Way to create express app 
*/
// const express = require("express");

// const app = express();

// app.get("/", (req, res, next) => res.send("Hey there"));

// app.listen(3001, () => console.log("Listening on port 3001"));

/* 
  OOP way to create express app
*/
const App = require("./App");
const getRoutes = require("./Router");

const app = new App(3001);

new getRoutes(app);
