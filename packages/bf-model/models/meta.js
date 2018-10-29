'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = require('./urls')(sequelize, DataTypes);

  const Meta = sequelize.define('Meta', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    urls_id: {
        type: DataTypes.INTEGER,

        references: {
            model: Urls,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    name: { type: DataTypes.TEXT },
    value: { type: DataTypes.TEXT },
    created: DataTypes.DATE
  }, {});
  Meta.associate = function(models) {
    // associations can be defined here
  };
  return Meta;
};