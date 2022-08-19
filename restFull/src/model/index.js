const {Sequelize} = require('sequelize');
const db = require('../config/connection');
const Movie = require('./MovieModel');
const User = require("./UserModel");


const modelDb = {
    User,
    Movie,
}

// *** Uncomment to syncronize model to database *** //
// db.sync({alter: true})

module.exports = modelDb