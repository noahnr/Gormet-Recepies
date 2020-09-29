import React, {useState} from "react";
import RecipeInfo from "./RecipeInfo";
import "bootstrap/dist/css/bootstrap.css";

// Recipe function populates searched recipes and the ingredients
const Recipe = ({recipe}) => {
  const [show, setShow] = useState(false);

  const {label, image, ingredients} = recipe.recipe;

<<<<<<< HEAD
    return (
        <div className="cardContainer">
        <div className="cardBody">
            <h2>{label}</h2>
            <div>
                <img src={image} alt={label} />
            </div>
                <button onClick={() => setShow(!show)}
                    >Ingredients
                    </button>
            {show && <RecipeInfo ingredients={ingredients} />}
             <div >
             <p><RecipeInfo ingredients={ingredients} /></p>
            </div>
           
            
            // </div>
=======
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
>>>>>>> 2700ce1d5eb84f2b3956b0330b069c141baeb05c
        </div>
      </div>
    </div>
  );
};

// Export Recipe
export default Recipe;
