
const Sequelize = require('sequelize');

module.exports = (uri)=>{
    // Or you can simply use a connection uri
    const sequelize = new Sequelize(uri);
    return sequelize.authenticate();
}