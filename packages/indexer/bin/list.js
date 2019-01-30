#!/usr/bin/env node
const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://sebs:123abc@localhost:5432/bundesfeeds_development');

const Persons = require('@bundesfeeds/bf-model/models/persons')(sequelize, Sequelize);

Persons.all().then(results => {
    return results.map(result => result.toJSON())
})
.then(JSON.stringify)
.then(console.log)
.finally(r => process.exit(0))