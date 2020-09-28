import React, {useState} from "react";
import Axios from "axios";
import {v4 as uuidv4} from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";

// api call function with alert
const Search = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "ca253be7";

  const APP_KEY = "3aae923868ef77dd3110514cc501e886";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("Thats not a food guy!");
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Come on lets eat!!!");
    }
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  // search bar
  return (
    <div className="App">
      <h1>Gourmet Recipe Search</h1>
      <form className="search-from" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="What ya feel like cooking?"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
};

// Export Search
export default Search;