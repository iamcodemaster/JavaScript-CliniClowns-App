// Change the file name from db-sample.js to db.js

const Sequelize = require("sequelize");
const db = {}
const sequelize = new Sequelize("db name", "db username", "db pass", {
    host: "localhost",
    dialect: 'mysql',
    operatorsAliases: false,
    port: 8889
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
