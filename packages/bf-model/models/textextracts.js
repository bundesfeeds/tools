'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = require('./urls')(sequelize, DataTypes);
  const TextExtracts = sequelize.define('TextExtracts', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    urls_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Urls,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    text: { type: DataTypes.TEXT },
    created: DataTypes.DATE
}, {});
  TextExtracts.associate = function(models) {
    // associations can be defined here
  };
  return TextExtracts;
};