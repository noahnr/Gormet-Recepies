import React, {useState} from "react";
import RecipeInfo from "./RecipeInfo";

import "bootstrap/dist/css/bootstrap.css";
// import style from "../App.css"

const Recipe = ({recipe}) => {
  const [show, setShow] = useState(false);

  const {label, image, ingredients} = recipe.recipe;

  return (
    <div className="cardContainer">
      <div className="cardBody">
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeInfo ingredients={ingredients} />}
        <div>
          <p>
            <RecipeInfo ingredients={ingredients} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;