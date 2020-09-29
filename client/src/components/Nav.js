import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {MDBBtn} from "mdbreact";
<<<<<<< HEAD
import style from "../App.css"
import 'bootstrap/dist/css/bootstrap.css';


import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-info bg-info mb-4">
      <ul>
        <li>
=======

// Navagation bar with links for log out, login, and recipes
function Nav() {
  return (
    <nav className="navbar ">
      <ul className="navUL">
        <li className="navLI">
>>>>>>> 2700ce1d5eb84f2b3956b0330b069c141baeb05c
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

<<<<<<< HEAD


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
=======
// Export Nav
export default Nav;
>>>>>>> 2700ce1d5eb84f2b3956b0330b069c141baeb05c
