const router = require("express").Router();
const recipesCtrl = require("../../contollers/recipesCtrl.js");

// Matches with "/api/books"
router.route("/")
    .get(recipesCtrl.findAll)
    .post(recipesCtrl.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(recipesCtrl.findById)
    .put(recipesCtrl.update)
    .delete(recipesCtrl.remove);

module.exports = router;
