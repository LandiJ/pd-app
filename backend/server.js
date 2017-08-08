const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// const sessionConfig = require("./sessionConfig");
// const morgan = require("morgan");
const models = require("./models");

const port = process.envPORT || 8000;
const app = express();
const expressValidator = require("express-validator");
// const mustacheExpress = require("mustache-express");

// app.engine("mustache", mustacheExpress());
// app.set("views", "./public");
// app.set("view engine", "mustache");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session(sessionConfig));
// app.use(morgan("dev"));
app.use(expressValidator());

function checkAuth(req, res, next) {
  if (!req.session.userMaybe) {
    return res.redirect("/login");
  } else {
    next();
  }
}
// ROUTES

app.use("/", express.static(__dirname + "/public"));

app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
