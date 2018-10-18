'use strict';
module.exports = (sequelize, DataTypes) => {
  const screens = sequelize.define('screens', {
    os: DataTypes.STRING,
    section: DataTypes.STRING
  }, {});
  screens.associate = function(models) {
    screens.hasMany(models.manifestos);
  };
  return screens;
};