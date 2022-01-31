const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.Password, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
}

)

sequelize.authenticate()
    .then(() => {
        console.log('Connected..')
    })
    .catch(err => {
        console.log('Error', err)
    })

const db = {}
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require('./employeeModel.js')(sequelize, DataTypes);
db.sequelize.sync({ force: false })
.then(() => {
    console.log('Syncing done!')
})

module.exports = db;
