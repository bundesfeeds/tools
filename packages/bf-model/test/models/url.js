const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});

const Urls = require('../../models/urls.js')(sequelize, Sequelize);

describe('Urls', ()=>{
    var urls;
    beforeEach(()=>{
        urls = new Urls({
            url: 'foo',
            created: new Date(), 
            id: 1,
        });
    })

    it('has url property', ()=>{
        assert.equal(urls.url, 'foo')
    })  
    it('has created property', ()=>{
        assert.ok(urls.created)
    })
    it('has id property', ()=>{
        assert.equal(urls.id, 1)
    });
});