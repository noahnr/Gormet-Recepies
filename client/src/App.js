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
