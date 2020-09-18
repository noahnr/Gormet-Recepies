import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2>Gourmet-Recipes</h2>
            <Link to="/">Logout</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Nav;