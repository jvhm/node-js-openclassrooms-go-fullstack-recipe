'use strict'

/**
 * @file models/recipe.js
 * 
 * Model schema for Recipe to be used on MongoDB.
 */

const mongoose = require('mongoose');

const recipe = mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    time: {
        type: Number,
        required: true,
        min: [1, 'The time to prepare cannot be less than 1 minute']
    },
    difficulty: {
        type: Number,
        required: true,
        min: [1, 'Difficulty must be between 1 and 5'],
        max: [5, 'Difficulty must be between 1 and 5']
    }
});

module.exports = mongoose.model('Recipe', recipe);