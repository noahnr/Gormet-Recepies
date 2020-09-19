import React from "react";
import RecipeResult from "./RecipeResult";

function Result(props) {
    if(props.path === "/") {
        return (
            <div id="results">
                <h3>Results Found</h3>
                {props.recipeData.map((recipe) => {
                    const recipeInfo = recipe.Info;
                    return<RecipeResult
                    ingredients= {recipeInfo.ingredients}
                    health= {recipeInfo.health}
                    diet= {recipeInfo.diet}
                    cuisineType= {recipeInfo.cuisineType}
                    mealType= {recipeInfo.mealType}
                    dishType= {recipeInfo.dishType}
                    calories= {recipeInfo.calories}
                    time = {recipeInfo.time}
                    excluded = {recipeInfo.excluded}
                    img= {recipeInfo.imageLinks}
                    path= {props.path}
                    key= {recipe.id} />
                })}
            </div>
        );
    } else if (props.path === "/saved") {
        if(props.savedRecipe.length > 0 ) {
            return (
                <div id="resultContainer">
                    <h3>Saved Recipes</h3>
                    {props.savedRecipe.map((recipeInfo) => {
                        return <RecipeResult
                        ingredients= {recipeInfo.ingredients}
                        health= {recipeInfo.health}
                        diet= {recipeInfo.diet}
                        cuisineType= {recipeInfo.cuisineType}
                        mealType= {recipeInfo.mealType}
                        dishType= {recipeInfo.dishType}
                        calories= {recipeInfo.calories}
                        time = {recipeInfo.time}
                        excluded = {recipeInfo.excluded}
                        img= {recipeInfo.imageLinks}
                        path= {props.path}
                        key= {recipeInfo.id} />
                    })}
                </div>
            );
        } else {
            return(
                <div id="resultContainer">
                    <h3>Saved Recipes</h3>
                    <p>No Saved Recipe</p>
                </div>
            );
        }
    }
}

export default Result;