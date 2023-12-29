const mongoose = require('mongoose')


const eventSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    event:{
        type:String
    },
    description:{
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)