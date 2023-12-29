const mongoose = require('mongoose')
const  db = async () =>  {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb connected')
    } catch (error) {
        
    }
}

module.exports = db