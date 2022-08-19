const {Sequelize} = require('sequelize');
const db = require('../config/connection');

const User = require("./UserModel");

const modelDb = {
    User
}

// *** Uncomment to syncronize model to database *** //
// db.sync({alter: true})

module.exports = modelDb