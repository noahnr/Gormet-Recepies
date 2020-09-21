import React from "react";
import {Link} from "react-router-dom";
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
        <br></br>
        <li>
          <MDBBtn href="/signup">Sign Up</MDBBtn>
        </li>
        <br></br>
        <li>
          {/* <Link
            className="link"
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link> */}
        </li>
      </ul>
    </nav>
  );
}




export default Nav;
