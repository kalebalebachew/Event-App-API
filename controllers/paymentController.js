const axios = require('axios').default;
require('dotenv').config();

const CHAPA_URL = process.env.CHAPA_URL || 'https://api.chapa.co/v1/transaction/initialize';
const CHAPA_AUTH = process.env.CHAPA_AUTH; // Replace with your actual Chapa secret key

const config = {
  headers: {
    Authorization: `Bearer ${CHAPA_AUTH}`,
  },
};

const initiatePayment = async (req, res) => {
  // Chapa redirects you to this URL when payment is successful
  const CALLBACK_URL = 'http://localhost:4400/api/verify-payment/';
  const RETURN_URL = 'http://localhost:4400/api/payment-success/';

  // A unique reference given to every transaction
  const TEXT_REF = 'tx-myecommerce12345-' + Date.now();

  // Form data
  const data = {
    amount: '100',
    currency: 'ETB',
    email: 'ato@ekele.com',
    first_name: 'Ato',
    last_name: 'Ekele',
    tx_ref: TEXT_REF,
    callback_url: CALLBACK_URL + TEXT_REF,
    return_url: RETURN_URL,
  };

  // Post request to Chapa
  try {
    const response = await axios.post(CHAPA_URL, data, config);
    res.redirect(response.data.data.checkout_url);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error initiating payment');
  }
};

const verifyPayment = async (req, res) => {
  // Verify the transaction
  try {
    const response = await axios.get('https://api.chapa.co/v1/transaction/verify/' + req.params.id, config);
    console.log('Payment was successfully verified');
    res.send('Payment successfully verified');
  } catch (error) {
    console.log('Payment can\'t be verified', error);
    res.status(500).send('Error verifying payment');
  }
};

const paymentSuccess = (req, res) => {
  res.render('success');
};

module.exports = {
  initiatePayment,
  verifyPayment,
  paymentSuccess,
};



