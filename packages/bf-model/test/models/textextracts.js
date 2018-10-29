const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});
const TextExtracts = require('../../models/textextracts.js')(sequelize, Sequelize);

describe('TextExtracts', ()=>{
    var textExtracts;
    beforeEach(()=>{
        textExtracts = new TextExtracts({
            created: new Date(), 
            id: 1,
            urls_id: 1,
            text: 'foo',
        });
    })
    it('has id property', ()=>{
        assert.equal(textExtracts.id, 1)
    })   
    it('has urls_id property', ()=>{
        assert.equal(textExtracts.urls_id, 1)
    })    
    it('has created property', ()=>{
        assert.ok(textExtracts.created)
    })
    it('has text property', ()=>{
        assert.equal(textExtracts.text, 'foo');
    });
});
