const router = require("express").Router();
const recipeRoutes = require("./recipes");

// Recipe Routes
router.use("/recipes", recipeRoutes);

module.exports = router;
