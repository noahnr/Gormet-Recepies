import React from "react";
// import { Link } from "react-router-dom";
import {MDBBtn} from "mdbreact";

function Nav() {
  return (
    <nav className="mainNav">
      <ul>
        <li>
          <MDBBtn href="/">Log Out</MDBBtn>
        </li>
        <br></br>
        <li>
          <MDBBtn href="/login">Login</MDBBtn>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
