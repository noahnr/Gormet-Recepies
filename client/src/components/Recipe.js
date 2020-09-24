import React, { useState } from "react";
import RecipeInfo from "./Recipeinfo";

const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false)

    const { label, image, url, ingredients } = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target="-blank" rel="noopener 
            noreferrer">
                URL
                </a>
            <button onClick={() => setShow(!show)}
            >Ingredients</button>
            {show && <RecipeInfo ingredients={ingredients} />}

        </div>
    );
};

export default Recipe