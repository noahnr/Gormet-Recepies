import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";

class Login extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Enter credentials to login</p>
              <div className="grey-text">
                <MDBInput
                  label="Enter email address"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Enter password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn href="/recipes">Login</MDBBtn>
                <MDBBtn href="/signup">Sign Up</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
