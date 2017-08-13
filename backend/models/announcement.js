"use strict";
module.exports = function(sequelize, DataTypes) {
  var announcement = sequelize.define(
    "announcement",
    {
      title: {
        type: DataTypes.STRING
      },
      body: {
        type: DataTypes.STRING
      }
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return announcement;
};
