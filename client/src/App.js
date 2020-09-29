<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"
import { Container } from './styled/container';


=======
import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
>>>>>>> 2700ce1d5eb84f2b3956b0330b069c141baeb05c

// UI layout
class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Nav/>
=======
        <Nav />
>>>>>>> 2700ce1d5eb84f2b3956b0330b069c141baeb05c
        <Header />
        <AppWithRouterAccess />
        <Contacts />
      </Router>
    );
  }
}

// Export App
export default App;
