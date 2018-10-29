'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    url: DataTypes.STRING,
    created: DataTypes.DATE
}, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};