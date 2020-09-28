import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Welcome to Gourmet-Recipes!</h1>
        <p>Delicious recipes at the tip of your fingers!</p>
        <p>Please login to search available recipes</p>
      </header>
    );
  }
}

export default Header;
