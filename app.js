const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').MongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/helicopter', require('./routes/helicopter'));

const PORT  = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on ${PORT}`));

