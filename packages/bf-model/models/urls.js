'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = sequelize.define('Urls', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true 
    },
    url: DataTypes.STRING,
    created: DataTypes.DATE
  }, {

  });
  Urls.associate = function(models) {
    // associations can be defined here
  };
  return Urls;
};