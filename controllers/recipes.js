'use strict'

/**
 * @file controllers/recipes.js
 * 
 * Business logic for recipes entity.
 * In order to function with Express.js,
 * these methods have 3 parameters: request, response and next.
 */

const Recipe = require('../models/recipe');

exports.getAll = (req, res, next) => {
    Recipe.find().then((recipes) => {
        res.status(200).json(recipes);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}

exports.get = (req, res, next) => {
    Recipe.findById(req.params.id).then((recipe) => {
        res.status(200).json(recipe);
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}

exports.add = (req, res, next) => {
    const data = req.body;
    const recipe = new Recipe({
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        time: data.time,
        difficulty: data.difficulty
    });
    recipe.save().then(() => {
        res.status(200).json({
            message: 'Item added successfully!'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}

exports.update = (req, res, next) => {
    const data = req.body;
    const recipe = new Recipe({
        _id: req.params.id,
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        time: data.time,
        difficulty: data.difficulty
    });
    Recipe.updateOne(recipe).then(() => {
        res.status(200).json({
            message: 'Item updated successfully!',
            recipe: recipe
        });
    }).catch((error) => {
        console.error(error);
        res.status(400).json({
            error: error
        });
    });
}

exports.delete = (req, res, next) => {
    Recipe.deleteOne({ _id: req.params.id }).then(() => {
        res.status(200).json({
            message: 'Recipe deleted successfully.'
        });
    }).catch((error) => {
        res.status(400).json({
            error: error
        });
    });
}