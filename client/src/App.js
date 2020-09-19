// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import stylesheets from './components/styles';
// import Axios from 'axios'
// function App() {
//   const url =  'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';
//   const APP_ID = "1b660772";
//   const YOUR_APP_KEY =
//   "8b4a7a21e724774796e8f3be6a73493d";
//   const getData =  async ()=> {
//     const result = await Axios.get(url);
//     console.log(result)
//   }

import React, {Component} from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contacts from "./components/Contacts";
import Home from "./pages/Home";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Recipes from "./pages/Recipes"
// import stylesheets from './components/styles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/recipes" component={Recipes} />
          </Switch>
          <Contacts />
        </div>
      </Router>
    );
  }
}

export default App;

