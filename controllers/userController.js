const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const { findOne } = require('../models/eventModel')


//Registering a User 
const registerUser = asyncHandler(async (req,res) => {
const  {name,password,email} = req.body
if(!name || !password || !email){
    res.status(201).json({message: 'please provide all the required fields'})

}
    const salt = await bcrypt.genSalt(10)
    const hashPass = bcrypt.hash(password, salt)

    await User.create({
        name: name,
        password: hashPass,
        email: email
})
    res.status(200).json({message: 'User created successfully'})
})

// Login a User
const loginUser = asyncHandler(async (req,res) => {

    const {email, password} = req.body
    const user = await findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })

    }
})
const getUser = asyncHandler(async (req,res) => {

    

})

// Generating token
const generateToken = (id) => {
    return jwt.sign({id},
        process.env.JWT_TOKEN,{
            expiresIn: '30d'
        })
    }
        
