const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")("sk_test_51I3Ay3J1FwAwnRIAxvnpm2yilLCCjz3QOj3KVvGCcHr48bCyjtf2OyV2mDgBWgEMaK3Dw5yPZZsr8wEV4iwJDfJ500z1nfkopZ")

//Api

//App Configs
const app = express();

//Midlewares
app.use(cors({origin: true}));
app.use(express.json())

//API Routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total; 
    console.log('Payment request recieved for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  //in subunits
        currency: "usd", 
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
//Listener
exports.api  = functions.https.onRequest(app)
