const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Recipe information
const recipeSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  ingredients: String,
  date: {type: Date, default: Date.now},
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
