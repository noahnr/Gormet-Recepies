import React, { Component } from "react";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

// import stylesheets from './components/styles';

function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Switch>
      <Route exact path={["/", "/login"]}>
        <Login />
      </Route>
      <Route exact path="/login/signup">
        <SignUp />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}


export default App;
