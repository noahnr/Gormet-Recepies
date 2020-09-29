import React from "react";
import {v4 as uuidv4} from "uuid";

// RecipeInfo contains the ingredient text information
const RecipeInfo = ({ingredients}) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">weight-{ingredient.weight}</li>
      </ul>
    );
  });
};

// Export RecipeInfo
export default RecipeInfo;