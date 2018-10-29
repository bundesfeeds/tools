'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = require('./urls')(sequelize, DataTypes);
  const Images = require('./images')(sequelize, DataTypes);

  const UrlsImages = sequelize.define('UrlsImages', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    from_urls_id: {
        type: DataTypes.INTEGER,

        references: {
            model: Urls,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    to_images_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Images,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    created: DataTypes.DATE
}, {});
  UrlsImages.associate = function(models) {
    // associations can be defined here
  };
  return UrlsImages;
};