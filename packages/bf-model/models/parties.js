'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parties = sequelize.define('Parties', {
    name: DataTypes.STRING,
    shortname: DataTypes.STRING
  }, {});
  Parties.associate = function(models) {
    // associations can be defined here
  };
  return Parties;
};