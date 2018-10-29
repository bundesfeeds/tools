const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});
const Links = require('../../models/links.js')(sequelize, Sequelize);



describe('Links', ()=>{
    var links;
    beforeEach(()=>{
        links = new Links({
            created: new Date(), 
            id: 1,
            from_urls_id: 1,
            to_urls_id: 1
        });
    })
    it('has from_urls_id property', ()=>{
        assert.equal(links.from_urls_id, 1)
    })    
    it('has to_urls_id property', ()=>{
        assert.equal(links.to_urls_id, 1)
    })

    it('has created property', ()=>{
        assert.ok(links.created)
    })

    it('has id property', ()=>{
        assert.equal(links.id, 1)
    });
});