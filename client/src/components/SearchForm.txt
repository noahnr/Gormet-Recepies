import React from "react";

function SearchForm(props) {
    return (
        <div id ="searchContainer">
            <h3>Recipe Search</h3>
            <form id="recipeSearch">
            <label htmlFor="recipeInput" form="recipeSearch">
                Type in your favorite recipe:
            </label>
            <br></br>
            <input type="text" 
            name="recipeInput" 
            form="recipeSearch"
            onChange={(evt) => props.handleFormChange(evt)}
            placeholder="Recipe"
            required />
            <br></br>
            <button type="submit" onClick={(evt) => props.handleSearchClick(evt)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;