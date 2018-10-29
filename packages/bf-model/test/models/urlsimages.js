
const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});
const UrlsImages = require('../../models/urlsimages.js')(sequelize, Sequelize);

describe('UrlsImages', ()=>{
    var urlsImages;
    beforeEach(()=>{
        urlsImages = new UrlsImages({
            created: new Date(), 
            id: 1,
            from_urls_id: 1,
            to_images_id: 1,
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(urlsImages.from_urls_id, 1)
    });
    it('has to_images_id property', ()=>{
        assert.equal(urlsImages.to_images_id, 1)
    });        
    it('has created property', ()=>{
        assert.ok(urlsImages.created)
    });
});