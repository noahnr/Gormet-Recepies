import React, { useState } from "react";
import RecipeInfo from "./RecipeInfo";

import 'bootstrap/dist/css/bootstrap.css';
import style from "../App.css"

const Recipe = ({recipe}) => {
  const [show, setShow] = useState(false);

  const {label, image, url, ingredients} = recipe.recipe;

    return (
        <div className="card">
        <div className="cardBody">
            <h2>{label}</h2>
            <div>
                <img src={image} alt={label}  className="card-img-top"/>
            </div>
                {/* <button className="btn btn-primary" onClick={() => setShow(!show)}
                    >Ingredients
                    </button> */}
            {show && <RecipeInfo ingredients={ingredients} />}
             <div className="card-body">
             <p className="card-text"><RecipeInfo ingredients={ingredients} /></p>
            </div>
{/* 
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            */}
            
            // </div>
        </div>

           
      

        
        
    );
};

export default Recipe;
