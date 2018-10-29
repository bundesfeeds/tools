
const Sequelize = require('sequelize');
const assert = require('assert');

const sequelize = new Sequelize({
    dialect: 'postgres'
});
const Meta = require('../../models/meta.js')(sequelize, Sequelize);

describe('Meta', ()=>{
    var meta;
    beforeEach(()=>{
        meta = new Meta({
            created: new Date(), 
            id: 1,
            urls_id: 1,
            name: 'foo',
            value: 'bar',
        });
    })
    it('has id property', ()=>{
        assert.equal(meta.id, 1)
    })   
    it('has urls_id property', ()=>{
        assert.equal(meta.urls_id, 1)
    })    
    it('has created property', ()=>{
        assert.ok(meta.created)
    })
    it('has name property', ()=>{
        assert.equal(meta.name, 'foo');
    });
    it('has value property', ()=>{
        assert.equal(meta.value, 'bar');
    });
});