<<<<<<< HEAD


// import React from "react";
=======
import React from "react";
>>>>>>> master
// import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

<<<<<<< HEAD

// function Nav() {
//   return (
//     <nav className="mainNav">
//       <ul>
//         <li>
//           <MDBBtn href="/">Log Out</MDBBtn>
//         </li>
//         <br></br>
//         <li>
//           <MDBBtn href="/login">Login</MDBBtn>
//         </li>
//         <br></br>
//         <li>
//           <MDBBtn href="/signup">Sign Up</MDBBtn>
//         </li>
//         <br></br>
//         <li>
//           {/* <Link
//             className="link"
//             activeClass="active"
//             to="contacts"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Contact Us
//           </Link> */}
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
=======
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

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
>>>>>>> master


// class Navbar extends Component {
//   render() {

//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             Gourmet Recipes
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   Newsfeed
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

export default Nav;
