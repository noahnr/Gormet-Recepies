import React, { useState } from "react";
import RecipeInfo from "./RecipeInfo";

import "bootstrap/dist/css/bootstrap.css";
import style from "../App.css";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="card">
      <div className="cardBody">
        <h2>{label}</h2>
        <div>
          <img
            className="recipeImg"
            src={image}
            alt={label}
            className="card-img-top"
          />
        </div>
        {show && <RecipeInfo ingredients={ingredients} />}
        <div className="card-body">
          <p className="card-text">
            <RecipeInfo ingredients={ingredients} />
          </p>
        </div>
        */} //{" "}
      </div>
    </div>
  );
};

export default Recipe;
