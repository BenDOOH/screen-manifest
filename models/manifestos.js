'use strict';
module.exports = (sequelize, DataTypes) => {
  const manifestos = sequelize.define('manifestos', {
    file_name: DataTypes.STRING,
    screen_id: DataTypes.STRING
  }, {});
  manifestos.associate = function(models) {
    manifestos.belongsTo(models.screens, {foreignKey: 'id'})
  };
  return manifestos;
};