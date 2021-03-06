import React, {useState} from "react";
import RecipeInfo from "./RecipeInfo";
import "bootstrap/dist/css/bootstrap.css";

// Recipe function populates searched recipes and the ingredients
const Recipe = ({recipe}) => {
  const [show] = useState(false);

  const {label, image,url, ingredients} = recipe.recipe;

  return (
    <div className="container-sm">
      <div className="col-sm">
        <h2>{label}</h2>
        <img src={image} alt={label} className="card-img-top"/>
        {show && <RecipeInfo ingredients={ingredients} />}
        <a
                href={url}
                target="-blank"
                rel="noopener 
            noreferrer"
            >
                RECIPE
            </a>
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
