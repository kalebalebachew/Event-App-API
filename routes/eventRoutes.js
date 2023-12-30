const express = require('express')
const app = express()


const {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent,
      } = require('../controllers/eventController')


app.route('/').get(getEvents).post(setEvent).post(bookEvent)
app.route('/:eventId').put(updateEvent).delete(deleteEvent).put(cancelEvent)


module.exports = app