import React from "react";
import API from "../utils/API";
import Search from "../components/Search";
// Shows different recipes the user searched
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
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  // handles and changes that are typed in to search bar
  handleFormChange(change) {
    change.preventDefault();
    this.setState({recipeInput: change.target.value});
  }
  // handle the search click event button
  handleSearchClick(event) {
    event.preventDefault();
    API.searchRecipe(this.state.recipeInput).then((response) => {
      this.setState({recipeData: response.data});
      this.setState({recipeInput: ""});
    });
  }
  render() {
    const {currentUserEmail, currentUserName} = this.state;
    return (
      <>
        <div className="userWelcome">
          <h1>Welcome, {currentUserName}</h1>
          <p>Email: {currentUserEmail}</p>
          <Search />
        </div>
      </>
    );
  }
}
// Export Recipes
export default Recipes;
