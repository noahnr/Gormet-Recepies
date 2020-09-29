import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"



class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Header />
        <AppWithRouterAccess />
        <Contacts />
      </Router>
    );
  }
}

  
export default App;
