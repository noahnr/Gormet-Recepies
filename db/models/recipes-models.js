const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let recipes = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model("recipes", recipes);
