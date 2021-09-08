const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors"); 
const stripe = require("stripe")('sk_test_51IVIZnAoT0ZB2BYbMmRweAr0XPsc6xhA2wty1vom01qFZ2Mcxp1b1NdICd9FeQTWtlAIcAQntoyoV9s7Mg9m4ce900f0xREQCn')

//API

//App config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());


//API Route
app.get('/', (request, response) => response.status(200).send('hello world')); 

app.post('/payments/create', async (request, response) => {
    console.log('Payment Request reveiced!!!!', total);
    const total = request.query.total; 
    
    console.log('Payment Request reveiced!!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    }); 

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    }); 
});


//Listen command 
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-4e65b/us-central1/api