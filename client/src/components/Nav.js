import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <h2>Gourmet-Recipes</h2>
            <Link to="/">Logout</Link>
            <Link to="/home">Home</Link>
        </nav>
    );
}

export default Nav;