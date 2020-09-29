import React, {useState} from "react";
import RecipeInfo from "../components/RecipeInfo";
import "bootstrap/dist/css/bootstrap.css";

// Recipe function populates searched recipes and the ingredients
const Recipe = ({recipe}) => {
  const [show] = useState(false);

  const {label, image, ingredients} = recipe.recipe;

  return (
    <div className="container-sm">
      <div className="col-sm">
        <h2>{label}</h2>
        <img src={image} alt={label} className="card-img-top"/>
        {show && <RecipeInfo ingredients={ingredients} />}
        <div className="card-body">
          <p className="card-text">
            <RecipeInfo ingredients={ingredients} />
          </p>
        </div>
      </div>
    </div>
  );
};

// Export Recipe
export default Recipe;
