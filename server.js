const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();  // ai "app" tai holo akhn pura application. Karon "app" ar moddhe express ke call koreci

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {  // '/' aita holo root route. Jokhon kew 4000 a visit korbe tokhon ai route show hobe
    res.json({
        message: 'Welcome To Our Application'
    });
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server is Running on PORT 4000');
    mongoose.connect('monogdb://localhost/boighor', 
        { useNewUrlParser: true },
        () => {
        console.log('Database Connected.....');
    });
});