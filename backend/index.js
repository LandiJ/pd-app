const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
var pg = require("pg");
const users = require("./routes/users");
const announcements = require("./routes/announcements");
const protectedRoutes = require("./routes/protected-routes");
const login = require("./routes/login");
var auth = require("./middleware/auth");

const models = require("./models");

const port = process.env.PORT || 8000;
const app = express();
const expressValidator = require("express-validator");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());
// app.use("/", express.static(__dirname + "/public"));
app.use("/users", login);
app.use("/api", auth, protectedRoutes);

users(app);
announcements(app);
// protectedRoutes(app);
// login(app);

function checkAuth(req, res, next) {
  if (!req.session.userMaybe) {
    return res.redirect("/login");
  } else {
    next();
  }
}
// ROUTES

app.get("/", (req, res) => {
  res.send("Got it");
});
app.set("port", process.env.PORT);

app.use("/", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
