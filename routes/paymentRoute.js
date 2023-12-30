const express = require('express');
const app = express()
const paymentController = require('./controllers/paymentController');



// Initial payment endpoint
app.post('/api/pay', paymentController.initiatePayment);

// Verification endpoint
app.get('/api/verify-payment/:id', paymentController.verifyPayment);

// Success endpoint
app.get('/api/payment-success', paymentController.paymentSuccess);

module.exports = app