import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";

// UI layout
class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <AppWithRouterAccess />
        <Contacts />
      </Router>
    );
  }
}

// Export App
export default App;
