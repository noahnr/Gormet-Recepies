import React from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import API from "../utils/API";
// import style from "../App.css"

// import Results from "../components/Results";
// import SearchForm from "../components/SearchForm";
// import RecipeSearcher from "../components/RecipeSearcher"
import Search from "../components/Search"

import Nav from "../components/Nav"
// import classes from "*.module.css";

class Recipes extends React.Component {
  state = {
    currentUsername: "",
    currentUserEmail: "",
  };
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      recipeInput: "",
      recipeData: [],
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
}

handleFormChange(change) {
    change.preventDefault();
    this.setState({ recipeInput: change.target.value })
}

handleSearchClick(event) {
    event.preventDefault();
    API.searchRecipe(this.state.recipeInput)
        .then((response) => {
            this.setState({ recipeData: response.data });
            this.setState({ recipeInput: "" });
        })
    };


    render() {
        const { currentUserEmail, currentUserName } = this.state;

        return (
            <>
                <Nav />
                <div className="recipies">
                    <h1>Welcome {currentUserName}</h1>
                    <p>Email: {currentUserEmail}</p>
                    <Search/>
                </div>
            <div>
                    
                <p>You have reached your news feed! Search your recipe!</p>
                </div>
                <div className="imgSlider"> 
          
          </div>
            </ >
            
        );
    }   
}

export default Recipes;
