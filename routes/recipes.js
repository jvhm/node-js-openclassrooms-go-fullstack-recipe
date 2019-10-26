'use strict'

/**
 * @file routes/recipe.js
 * 
 * Routing for 'recipes' entity
 */

const express = require('express');
const ctrl = require('../controllers/recipes');

const router = express.Router();

/**
 * Routes for:
    GET  /api/recipes  — returns all recipes in database
    GET  /api/recipes/:id  — returns the recipe with the provided ID from the database
    POST  /api/recipes  — adds a new recipe to the database
    PUT  /api/recipes/:id  — modifies the recipe with the provided ID
    DELETE  /api/recipes/:id  — deletes the recipe with the provided ID
 */
router.get('/', ctrl.getAll);
router.get('/:id/', ctrl.get);
router.post('/', ctrl.add);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);

module.exports = router;