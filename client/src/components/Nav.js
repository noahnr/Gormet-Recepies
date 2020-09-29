import React from "react";
// import { Link } from "react-router-dom";
// import {MDBBtn} from "mdbreact";
import style from "../App.css"
import 'bootstrap/dist/css/bootstrap.css';


import { Link } from 'react-router-dom';
import {MDBBtn} from "mdbreact";


function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-info bg-info mb-4">
      <ul>
        <li>
          <MDBBtn href="/">Log Out</MDBBtn>
        </li>
        <br></br>
        <li className="navLI"> 
          <MDBBtn href="/login">Login</MDBBtn>
        </li>
        <br></br>
        <li>
        <li className="navLI">
          <MDBBtn href="/Recipes">Recipes</MDBBtn>
        </li>
        </li>
      </ul>
    </nav>
  );
}



// class Navbar extends Component {
//   render() {


export default Nav;
