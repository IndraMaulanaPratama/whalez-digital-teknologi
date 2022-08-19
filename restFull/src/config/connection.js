const {Sequelize} = require('sequelize');
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbDialect= process.env.DB_DIALECT

const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect
})

try {
    db.authenticate()
    console.log(`connected to DB: ${dbName}`)
} catch (error) {
    console.error(`unable connect to DB, error: ${error}`)
}

module.exports = db