require('dotenv').config();

const express = require('express');
const db = require('./config/connection');
const modelDb = require('./model');
const appRouter = require('./routes');

const app = express()
const host= process.env.HOSTNAME
const port= process.env.PORT 

app.use(express.urlencoded( {extended:true} ))
app.use(express.json())

app.use('/auth', appRouter.auth)
app.use('/movie', appRouter.movie)
app.get('/', (req, res) => {res.status(200).json('Selamat Datang')})

app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`)
})