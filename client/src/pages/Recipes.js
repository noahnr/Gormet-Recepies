import React from "react";
import API from "../utils/API";
import Results from "../components/Results";
import SearchForm from "../components/SearchForm";

class Recipes extends React.Component {
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
        this.setState({recipeInput: change.target.value})
    }

    handleSearchClick(event) {
        event.preventDefault();
        API.searchRecipe(this.state.recipeInput)
        .then((response) => {
            this.setState({recipeData: response.data});
            this.setState({recipeInput: ""});
        })
    };

    render() {
        return(
            <main>
                <SearchForm handleFormChange= {this.handleFormChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.recipeData.length > 0) ?
                <Results recipeData= {this.state.recipeData} path= {this.props.match.path} /> : null }
            </main>
        );
    }
}

export default Recipes;