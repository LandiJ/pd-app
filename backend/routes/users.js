const models = require("../models");

function users(app) {
  app.post("/users", function(req, res) {
    var newUser = models.user.build({
      username: req.body.username,
      password: req.body.password
    });
    newUser.save().then(function(savedUser) {
      res.send("/");
    });
  });

  app.get("/users", function(req, res) {
    models.user.findAll({}).then(function(allUsers) {
      res.send(allUsers);
    });
  });

  app.post("/delete-user/:id", (req, res) => {
    models.user
      .destroy({ where: { id: req.params.id } })
      .then(() => {
        res.send("deleted user");
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
}
module.exports = users;
