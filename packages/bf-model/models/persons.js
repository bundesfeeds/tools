'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persons = sequelize.define('Persons', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    url: DataTypes.STRING,
    partiesId: DataTypes.INTEGER
  }, {});
  Persons.associate = function(models) {
    // associations can be defined here
  };
  return Persons;
};