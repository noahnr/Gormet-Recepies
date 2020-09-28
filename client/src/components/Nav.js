import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import {MDBBtn} from "mdbreact";


function Nav() {
  return (
    <nav className="navbar ">
      <ul className="navUL">
        <li className="navLI">
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



export default Nav;
