import React from 'react'
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.css';

const RecipeInfo = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <div className="card" >
            <ul key={uuidv4()}>
            <li>{ingredient.text}</li>
            <li>weight-{ingredient.weight}</li>

            </ul>
            </div>

        );
    });


};

export default RecipeInfo
