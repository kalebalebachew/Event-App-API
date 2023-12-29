const express = require('express')
const app = express()


const {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent,
      } = require('../controllers/eventController')


app.route('/').get(getEvents).post(setEvent)
app.route('/:id').put(updateEvent).delete(deleteEvent)


module.exports = app