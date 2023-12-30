const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const Event = require('../models/eventModel')
const User = require('../models/userModel')



const getEvents = asyncHandler(async (req,res) =>{

})
// creating an event
const createEvent = asyncHandler(async (req,res) =>{
    
    const event = req.body({title, description, category,  location, date,})
    if(!event){
        res.status(400).json({message: ' fill all the required fields'})
    }
    await Event.create({
        title: title,
        description: description,
        category: category,
        location: location,
        date: date,})
        
        res.status(200).json({message: 'Event created successfully'})

})

//
const bookEvent = asyncHandler(async (req,res) =>{
    
    
})
const updateEvent = asyncHandler(async (req,res) =>{
    
})
const deleteEvent = asyncHandler(async (req,res) =>{
    
})
const cancelEvents = asyncHandler(async (req,res) =>{
    
})


