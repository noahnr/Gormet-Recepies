const router = require("express").Router();
const recipesCtrl = require("../../contollers/recipesCtrl.js");
const axios = require("axios");
const path = require("path");

// Matches with "/api/recipe"
router.route("/").get(recipesCtrl.findAll).post(recipesCtrl.create);

// Matches with "/api/recipe/:id"
router
  .route("/:id")
  .get(recipesCtrl.findById)
  .put(recipesCtrl.update)
  .delete(recipesCtrl.remove);

module.exports = router;
