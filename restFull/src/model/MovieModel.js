const {Sequelize, DataTypes} = require('sequelize')
const db = require('../config/connection')

const Movie = db.define('movie', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: `Id table movie dibuat secara auto increment`
    },

    nama_movie: {
        type: DataTypes.STRING(150),
        allowNull: false,
        comment: `Judul film yang disimpan`,
    },

    sutradara: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: `Indra Maulana`,
        comment: `Sutradara pembuatan film`
    },

    tahun_rilis: {
        type: DataTypes.STRING(4),
        allowNull:false,
        defaultValue: '1995',
        comment: `Tahun risil film`
    },

    sinopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'Bahwa sesungguhnya Kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan di atas dunia harus dihapuskan, karena tidak sesuai dengan perikemanusiaan dan perikeadilan.'
    },

    deletedAt: {
        type: DataTypes.DATE,
        allowNull:true,
    }
}, {
    freezeTableName: true
})

module.exports = Movie