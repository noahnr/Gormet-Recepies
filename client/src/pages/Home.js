import React from "react";
import {MDBContainer, MDBBtn} from "mdbreact";

class Home extends React.Component {
    render() {
        return(
            <MDBContainer>
            <h1>Welcome Folks!</h1>
                <p>Please sign up to view available recipes. If already a member, please log in.</p>
                <br></br>
                <MDBBtn href="/login">Login</MDBBtn>
                <br></br>
                <MDBBtn href="/signup">Sign Up</MDBBtn>
            </MDBContainer>
        );
    }
}

export default Home;