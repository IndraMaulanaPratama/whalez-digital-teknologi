const db = require("../config/connection");
const modelDb = require("../model");

const MovieController = {}

MovieController.index = (req, res) => {
    res.status(200).json('Movie Route')
}

MovieController.getAll = async (req, res) => {
    let result = {}
    let status = 0

    try {
        result = await modelDb.Movie.findAll()
        status = 200
    } catch (error) {
        status = 500
        result = {message: `Can't get data movie, please contact Administrator!`}        
    }

    res.status(status).json(result)
}

MovieController.insert = async (req, res) => {
    const {nama_movie, sutradara, tahun_rilis, sinopsis} = req.body
    let status = 0
    let result = {}

    if (nama_movie && sutradara && tahun_rilis && sinopsis) {

        try {
            await modelDb.Movie.create({
                nama_movie,
                sutradara,
                tahun_rilis,
                sinopsis
            })

            status = 200
            result = {message: `Successfully add 1 row data`}
        } catch (error) {
            console.error(error)
            status = 500            
            result = {message: `filed create data, please contact Administrator App`}
        }
    
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

MovieController.update = async (req, res) => {
    const {id} = req.params
    const {nama_movie, sutradara, tahun_rilis, sinopsis} = req.body
    let status = 0
    let result = {}

    if (id) {

        try {
            let movie = await modelDb.Movie.findOne({ where: {id} })

            if (movie) {
                let update = await modelDb.Movie.update(
                    {nama_movie, sutradara, tahun_rilis, sinopsis},
                    {where: {id}}
                )

                if (update) {
                    status = 200
                    result = {message: `Data movie ${movie.nama_movie} has been updated`}                         
                
                } else {
                    status = 500
                    result = {message: `can't update data movie, please contact Administrator!`}                         

                } 
                
            } else {
                status = 400
                result = {message: `Can't find movie`}                         
            }
        } catch (error) {
            status = 400
            result = {message: `Can't find movie`} 
        }

    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)    
}

MovieController.disable = async (req, res) => {
    const {id} = req.params
    let status = 0
    let result = {}

    console.log(id)

    if (id) {

        try {
            const movie = await modelDb.Movie.findOne( {where: {id} }) 

            if (movie) {
                await modelDb.Movie.update(
                    {deletedAt: Date.now()},
                    {where: {id} }
                )
                status = 200
                result = {massage: `Data ${movie.nama_movie} has been disabled`}

            } else {
                status = 400
                result = {massage: `can't find movie`}

            }

        } catch (error) {
            status = 500
            result = {message: `Can't disabling movie, please contact Administrator`}
            console.log(error)
        }
    
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)   
}

MovieController.activate = async (req, res) => {
    const {id} = req.params
    let status = 0
    let result = {}

    console.log(id)

    if (id) {

        try {
            const movie = await modelDb.Movie.findOne( {where: {id} }) 

            if (movie) {
                await modelDb.Movie.update(
                    {deletedAt: null},
                    {where: {id} }
                )
                status = 200
                result = {massage: `Data ${movie.nama_movie} has been activate`}

            } else {
                status = 400
                result = {massage: `can't find movie`}

            }

        } catch (error) {
            status = 500
            result = {message: `Can't activatedisabling movie, please contact Administrator`}
            console.log(error)
        }
    
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)   
}

MovieController.delete = async (req, res) => {
    const {id} = req.params
    let status = 0
    let result = {}

    if (id) {

        try {
            await modelDb.Movie.destroy({ where: {id} })

            status = 200
            result = {message: `data ${id} has been removed`}
        } catch (error) {
            status = 500
            result = {message: `Can't removing movie, please contact administrator`}
            console.error(error)
        }

    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

module.exports = MovieController