'use strict'

/**
 * @file app.js
 * 
 * Entry point for our Express.js server.
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipesRoutes = require('./routes/recipes');

// Connecting to mongoDB server.
mongoose.connect('mongodb+srv://training_user1:DqRHYz0KkUoyiPxN@' +
    'cluster0-2uajm.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to MongoDB server...');
    })
    .catch((error) => {
        console.error('Error when connecting to MongoDB server...');
        console.error(error);
    });

const app = express();

// CORS configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parser middleware for request body into Json objects.
app.use(bodyParser.json());

// Add routes
app.use('/api/recipes', recipesRoutes);

module.exports = app;