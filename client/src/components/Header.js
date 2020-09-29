import React, {Component} from "react";

// Header which contains a welcoming message
class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Welcome to Gourmet-Recipes!</h1>
        <p>Delicious recipes at the tip of your fingers!</p>
        <p className="headerP">Please login to search available recipes</p>
      </header>
    );
  }
}

// Export Header
export default Header;
