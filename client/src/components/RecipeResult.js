import React from "react";
import API from "../utils/API";
import {BrowserRouter as Router} from "react-router-dom";

class RecipeResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      deleted: false,
    };
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSaveClick = function (evt) {
    this.setState({saved: true});
    const recipeData = {
      ingredients: this.props.ingredients,
      health: this.props.health,
      diet: this.props.diet,
      cuisineType: this.props.cuisineType,
      mealType: this.props.mealType,
      dishType: this.props.dishType,
      calories: this.props.calories,
      time: this.props.time,
      excluded: this.props.excluded,
      img: this.props.img,
    };
    API.addRecipe(recipeData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Database error" + err);
      });
  };

  handleDeleteClick(evt) {
    this.setState({deleted: true});
    evt.preventDefault();
    API.deleteRecipe(this.props.id)
      .then((response) => {
        console.log(response);
        Router.dispatch(this.props.location, null);
      })
      .catch((err) => {
        console.log("Delete error" + err);
      });
  }

  render() {
    return (
      <div
        className="recipeResult"
        id={this.props.id ? this.props.id : null}
        style={{display: this.state.deleted ? "none" : "block"}}
      >
        <div className="row">
          <div className="aboutRecipe">
            <h4>{this.props.cuisineType}</h4>
          </div>
        </div>
        <div className="row">
          {this.props.img ? (
            <img
              src={
                this.props.img.smallThumbnail
                  ? this.props.img.smallThumbnail
                  : this.props.img.thumbnail
                  ? this.props.img.thumbnail
                  : ""
              }
              alt="recipe cover"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default RecipeResult;
