const Movie = require('../models/recipes-model')

createRecipes = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe',
        })
    }

    const recipe = new recipe(body)

    if (!recipe) {
        return res.status(400).json({ success: false, error: err })
    }

    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Recipe created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Recipe not created!',
            })
        })
}

updateRecipe = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Recipe not found!',
            })
        }
        recipe.name = body.name
        recipe.time = body.time
        recipe.rating = body.rating
        recipe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: recipe._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'recipe not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Recipe.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, error: `Recipe not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getRecipeById = async (req, res) => {
    await Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, error: `Recipe not found` })
        }
        return res.status(200).json({ success: true, data: recipe })
    }).catch(err => console.log(err))
}

getRecipes = async (req, res) => {
    await Recipe.find({}, (err, recipes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!recipes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createRecipes,
    updateRecipes,
    deleteRecipes,
}