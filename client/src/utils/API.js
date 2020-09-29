import axios from "axios";

export default {
  getRecipe: () => {
    return axios.get("/api/recipe");
  },
  searchRecipe: (title) => {
    return axios.post("/search", {title: title});
  },
  addRecipe: (recipeData) => {
    return axios.post("/api/recipe", recipeData);
  },
  deleteRecipe: (id) => {
    return axios.delete(`/api/recipe/${id}`);
  },
};
