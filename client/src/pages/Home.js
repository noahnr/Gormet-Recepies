import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';
import Keyframes from '@keyframes/core';
import style from "../App.css"

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/Recipes');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    const button = this.props.authState.isAuthenticated ?
      <button className="stdBtn " onClick={this.logout}>Logout</button> :
      <button className="stdBtn" onClick={this.login}>Login</button>;

    return (
      <div className="mainLanding">
        {/* <Link to='/'>Home</Link><br />
        <Link to='/Recipes'>Recipes</Link><br /> */}
        {/* {button} */}

<span class="button--bubble__container">
  <a href="/Login" class="button button--bubble">
    Please Login 
  </a>
  <span class="button--bubble__effect-container">
   
  </span>
</span>
</div>
    );
  }
});

//noahsoukupraesch@gmail.com