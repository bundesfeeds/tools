const Sequelize = require('sequelize');


// Or you can simply use a connection uri
const sequelize = new Sequelize('postgres://sebs:123abc@localhost:5432/bundesfeeds_development');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });