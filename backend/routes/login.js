// var express = require("express"),
//   _ = require("lodash"),
//   config = require("./config"),
//   jwt = require("jsonwebtoken");
// var models = require("../models");
// var router = express.Router();

// function login(app) {
//   function createIdToken(user) {
//     return jwt.sign(_.omit(user, "password"), config.secret, {
//       expiresIn: 60 * 60 * 5
//     });
//   }

//   function createAccessToken() {
//     return jwt.sign(
//       {
//         iss: config.issuer,
//         aud: config.audience,
//         exp: Math.floor(Date.now() / 1000) + 60 * 60,
//         scope: "full_access",
//         sub: "lalaland|gonto",
//         jti: genJti(), // unique identifier for the token
//         alg: "HS256"
//       },
//       config.secret
//     );
//   }

//   // Generate Unique Identifier for the access token
//   function genJti() {
//     let jti = "";
//     let possible =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (let i = 0; i < 16; i++) {
//       jti += possible.charAt(Math.floor(Math.random() * possible.length));
//     }

//     return jti;
//   }

//   function getUserScheme(req) {
//     var username;
//     var type;
//     var userSearch = {};

//     // The POST contains a username and not an email
//     if (req.body.username) {
//       username = req.body.username;
//       type = "username";
//       userSearch = { username: username };
//     } else if (req.body.email) {
//       // The POST contains an email and not an username
//       username = req.body.email;
//       type = "email";
//       userSearch = { email: username };
//     }

//     return {
//       username: username,
//       type: type,
//       userSearch: userSearch
//     };
//   }

//   app.post("/sessions/create", function(req, res) {
//     if (!req.body.username || !req.body.password) {
//       return res
//         .status(400)
//         .send("You must send the username and the password");
//     }

//     var userMaybe = req.body;
//     var userIs;
//     models.user.findAll().then(function(foundUsers) {
//       console.log("HEYYYYYYY", userMaybe);
//       foundUsers.forEach(function(item) {
//         console.log("ITEMSSSSS", item.dataValues.username);
//         console.log("UM USERNAME", userMaybe.username);
//         if (item.dataValues.username === userMaybe.username) {
//           userIs = item;
//           console.log("USERIS", userIs);
//         }
//       });

//       if (!userIs) {
//         return res.status(401).send("The username or password don't match");
//       }

//       if (userIs.password !== req.body.password) {
//         return res
//           .status(401)
//           .send("PASS The username or password don't match");
//       }

//       res.status(201).send({
//         id_token: createIdToken(userIs.dataValues),
//         access_token: createAccessToken()
//       });
//     });
//   });
// }
// module.exports = login;
var express = require("express");
var router = express.Router();
var models = require("../models");
var jwt = require("jsonwebtoken");
var jwtConfig = require("./config");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/login", function(req, res) {
  var userData = req.body;
  console.log(userData);

  if (!userData.username || !userData.password) {
    return res.status(400).send("Missing user name or password.");
  }

  models.user
    .find({ where: { username: userData.username } })
    .then(function(foundUser) {
      if (!foundUser) {
        return res.status(400).send("No record with that username exists.");
      }

      if (foundUser.password !== userData.password) {
        return res.status(400).send("Incorrect password.");
      }

      foundUser.password = "";

      var token = jwt.sign({ user: foundUser }, jwtConfig.secret, {
        expiresIn: 60 * 60 * 24
      });

      res.send({
        token: token,
        username: foundUser.username,
        userId: foundUser.id
      });
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

router.post("/id/:userId/", function(req, res) {
  console.log(req.params.userId);
  res.send(req.params.userId);
});

module.exports = router;
