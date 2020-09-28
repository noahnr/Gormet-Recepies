import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {MDBBtn} from "mdbreact";

// Navagation bar with links for log out, login, and recipes
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

// Export Nav
export default Nav;