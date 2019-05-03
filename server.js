const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/API/items');

const app = express();

app.use(bodyParser.json());

const MongoDB = require('./config/keys').mongoURI;

mongoose.connect(MongoDB, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/API/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));