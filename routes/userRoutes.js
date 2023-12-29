const express = require('express')
const app = express()

const{  registerUser,
        loginUser,
        getUser,
    } = require('../controllers/userController')

app.post('/',registerUser)
app.post('/login',loginUser)
app.get('/getUser',  getUser)