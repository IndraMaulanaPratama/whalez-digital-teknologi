const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/connection');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: `ID table user by auto increment`
    },

    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        comment: `Username yang digunakan oleh user`
    },

    email: {
        type: DataTypes.STRING(150),
        allowNull:false,
        unique: true,
        comment: `Email yang digunakan oleh user`
    },

    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: `Kata sandi yang sudah di encrypt`
    },

    akses: {
        type: DataTypes.STRING(20),
        allowNull:false,
        defaultValue: 'user',
        comment: `Akses user terhadap fitur dan service yang boleh digunakan atau biasa disebut role akses`
    },

    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: `Field yang digunakan untuk membuat fitur soft delete`
    }
}, {
    freezeTableName: true,
});

// await User.sync({alter:true})

module.exports = User