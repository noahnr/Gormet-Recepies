import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Nav from "./components/Nav";
import Contacts from "./components/Contacts"
import Header from "./components/Header"


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

  
export default App;
