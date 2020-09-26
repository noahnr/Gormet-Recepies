import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Contacts from "./components/Contacts"
import Header from "./components/Header"
import {Nav} from "./styled/nav"
import Carousel from "./components/Carousel"
import { Container } from './styled/container';



class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Container>
        <Header />
        <Carousel/>
        <AppWithRouterAccess />
        </Container>
        <Contacts />
      </Router>
    );
  }
}

  
export default App;
