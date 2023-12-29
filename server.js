const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const db = require('./config/db')
const port = process.env.PORT || 5000


db()






app.listen(port, () => console.log(`server running on port ${port}`))