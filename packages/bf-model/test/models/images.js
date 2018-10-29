const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});
const Images = require('../../models/images.js')(sequelize, Sequelize);

describe('Images', ()=>{
    var images;
    beforeEach(()=>{
        images = new Images({
            created: new Date(), 
            id: 1,
            url: 'foo'
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(images.url, 'foo')
    })     
    
    it('has created property', ()=>{
        assert.ok(images.created)
    })
    it('has id property', ()=>{
        assert.equal(images.id, 1)
    });
});