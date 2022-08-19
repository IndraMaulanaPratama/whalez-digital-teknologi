const express = require('express')
const auth = express()
const appController = require('../controller')

auth.get('/', appController.auth.index )
auth.get('/users', appController.auth.getAllUser)
auth.post('/users', appController.auth.signUp)
auth.post('/signin', appController.auth.signIn)
auth.put('/users', appController.auth.resetPassword)
auth.post('/forgot_password', appController.auth.forgotPassword)
auth.put('/users/disable_user', appController.auth.disableUser)
auth.put('/users/activate_user', appController.auth.activateUser)

// *** SAVE ZONE PLEASE *** 
auth.delete('/users/onlyAdmin/whalez-teknologi/:email', appController.auth.deleteUser)

module.exports = auth