const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Gormet-Recepies"
);

// recipe information for future input by the developers
const recipeSeed = [
    {
        title: "--",
        author: "Joseph",
        ingredients:
            "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Joseph",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Joseph",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Chris",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Chris",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Chris",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Chris",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Rudy",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Rudy",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Rudy",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Noah",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Noah",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    },
    {
        title: "--",
        author: "Noah",
        synopsis: "Recipe to come",
        date: new Date(Date.now())
    }
];

db.Recipe
    .remove({})
    .then(() => db.Recipe.collection.insertMany(recipeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
