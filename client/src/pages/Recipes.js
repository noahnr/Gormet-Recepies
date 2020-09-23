import React, { useState } from "react";
import API from "../utils/API";
// import Results from "../components/Results";
// import SearchForm from "../components/SearchForm";
import Nav from "../components/Nav";
// import RecipeSearcher from "../components/RecipeSearcher"
import Search from "../components/Search"


class Recipes extends React.Component {

    state = {
        currentUsername: '',
        currentUserEmail: ''
    }
    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            recipeInput: "",
            recipeData: []
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
                <div>
                    <h1>Welcome {currentUserName}</h1>
                    <p>Email: {currentUserEmail}</p>
                    <p>You have reached your news feed! Search your recipe!</p>
                </div>
                <Search />
            </ >
        );
    }
}

export default Recipes;