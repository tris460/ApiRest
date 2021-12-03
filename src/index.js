// Code for the server
const express = require('express');
const mongoose = require('mongoose');
const env = require('node-env-file');
const app = express();

env('./.env');
const port = process.env.PORT || 9001;
const mConection = process.env.MONGOOSE_CONECTION;

// Routes

// Main route of the app
app.get('/', (req, res) => { // req - Request object / res - Response object
    res.send('Welcome to my API');
});

// MongoDB connection
mongoose.connect(mConection)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error(err));

app.listen(port, () => console.log(`Server working on port ${port}`));
