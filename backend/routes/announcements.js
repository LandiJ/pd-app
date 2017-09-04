const models = require("../models");

function announcements(app) {
  app.post("/announcements", function(req, res) {
    var newAnnouncement = models.announcement.build({
      title: req.body.title,
      body: req.body.body
    });
    newAnnouncement.save().then(function(savedAnnouncement) {
      res.send("savedAnnouncement");
    });
  });

  app.get("/announcements", function(req, res) {
    models.announcement.findAll({}).then(function(allAnnouncements) {
      res.send(allAnnouncements);
    });
  });

  app.post("/delete-announcements", (req, res) => {
    models.announcement
      .destroy({ where: {} })
      .then(() => {
        res.send("deleted user");
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
}
module.exports = announcements;
