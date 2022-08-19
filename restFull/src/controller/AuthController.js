const bcrypt = require('bcrypt')

const db = require("../config/connection")
const modelDb = require("../model")

const AuthController = {}

AuthController.index = async (req, res) => {

    // const password = "passwod_user"
    // const hash = await bcrypt.hash(password, 3)
    // const compare = await bcrypt.compare(password, hash)
    // res.json({hash, compare})

    res.status(200).json({message: `Route Authentication`})
}

AuthController.getAllUser = async (req, res) => {
    try {
        const response = await modelDb.User.findAll()
        res.status(200)
        res.json({response})

    } catch (error) {
        
    }
}

AuthController.signUp = async (req, res) => {
    const {username, email, password} = req.body
    const password_hash = await bcrypt.hash(password, 3)

    let result = {}
    let status = 0

    if (username && email && password) { // Kondisi ketika semua field terpenuhi

        try {
            await modelDb.User.create({
                username,
                email,
                password_hash
            })
            status = 200
            result = {message: `Successfully add 1 row data`}
        
        } catch (error) {
            console.error(error)
            status = 500            
            result = {message: `filed create data, please contact Administrator App`}
        }
    
    } else { // response bad request karena field mandatory tidak terpenuhi
        status = 400
        result = {message: `Mandatory field can't be null`}
    }

    res.status(status).json(result)
}

AuthController.signIn = async (req, res) => {
    const {username, password} = req.body
    let result = {}
    let status = 0

    if (username && password) {

        try {
            const user = await modelDb.User.findOne({ where: {
                username
            } })

            if (user) { 
                const compare = await bcrypt.compare(password, user.password_hash)
                console.log(compare)

                if (compare) {
                    status = 200
                    result = {message: `You're logged now `}    

                } else { // response username dan password tidak sesuai
                    status = 400
                    result = {message: `Login Failed`}
                }

            
            } else { // response user tidak ditemukan login
                status = 400
                result = {message: `can't find user`}    
            }

        } catch (error) {
            status = 500
            result = {message: `filed create data, please contact Administrator App`}
        }

    } else {
        status = 400
        result = {message: `Mandatory field can't be null`}
    }

    res.status(status).json(result)
}

AuthController.resetPassword = async (req, res) => {
    const {email, password, new_password} = req.body
    let status = 0
    let result = {}

    
    if (email && password && new_password) {
        
        try {
            let user = await modelDb.User.findOne({ where: {email} })

            if (user) { // kondisi ketika user ditemukann

                const compare = await bcrypt.compare(password, user.password_hash)

                if(compare) { // handler ketika password user sesuai dengan database
                    const password_hash = await bcrypt.hash(new_password, 3)
                    let response = await modelDb.User.update(
                        {password_hash},
                        {where: {email}}
                    )
    
                    if(response) { // response sukses 
                        status = 200
                        result = {message: `Youre password has been updated`}
                    
                    } else { // response internal error
                        status = 500
                        result = {message: `System filed to update youre password, please contact administrator!`}
                    }
                
                } else { // handler ketika password tidak sesuai dengan database
                    status = 400
                    result = {message: `Password doesn't match`}                      
                }

            } else { // handle user tidak ditemukan
                status = 400
                result = {message: `Can't find user`}
            }

        } catch (error) { // response internal error
            status = 500
            result = {message: `System filed to update youre password, please contact administrator!`}     
            console.log(error)   
        }
        
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`}        
    }

    res.status(status).json(result)
}

AuthController.forgotPassword = async (req, res) => {   
    const {email} = req.body
    let status = 0
    let result = {}

    if (email) {

        try {
            let user = await modelDb.User.findOne({ where: {email} })

            if (user) {
                status = 200
                result = {message: `OK`, method: `PUT`, redirect: `http://127.0.0.1:8027/users`}
            
            } else {
                status = 400
                result = {message: `can't find user`}
            }

        } catch (error) {
            status = 500
            result = {message: `System can't find user data, please contact administrator`}
            console.log(error)
        }

    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

AuthController.disableUser = async (req, res) => {
    const {email} = req.body
    let status = 0
    let result = {}

    if(email) {

        try {
            const user = await modelDb.User.findOne({ where: {email} }) 

            if (user) {
                await modelDb.User.update(
                    {deletedAt: Date.now()},
                    {where: {email} }
                )
                status = 200
                result = {massage: `Data ${email} has been disabled`}

            } else {
                status = 400
                result = {massage: `can't find user`}

            }

        } catch (error) {
            status = 500
            result = {message: `Can't disabling user, please contact Administrator`}
            console.log(error)
        }

    
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

AuthController.activateUser = async (req, res) => {
    const {email} = req.body
    let status = 0
    let result = {}

    if (email) {

        try {
            const user = await modelDb.User.findOne({ where: {email} }) 

            if (user) {
                await modelDb.User.update(
                    {deletedAt: null},
                    {where: {email} }
                )
                status = 200
                result = {massage: `Data ${email} has been Activated`}

            } else {
                status = 400
                result = {massage: `can't find user`}

            }

        } catch (error) {
            status = 500
            result = {message: `Can't activate user, please contact Administrator`}
            console.log(error)
        }
    
    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

AuthController.deleteUser = async (req, res) => {
    const {email} = req.params
    let status = 0
    let result = {}

    if (email) {

        try {
            await modelDb.User.destroy({ where: {email} })

            status = 200
            result = {message: `data ${email} has been removed`}
        } catch (error) {
            status = 500
            result = {message: `Can't removing user, please contact administrator`}
            console.error(error)
        }

    } else {
        status = 400
        result = {message: `Mandatory field can't be null`} 
    }

    res.status(status).json(result)
}

module.exports = AuthController