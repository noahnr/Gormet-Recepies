import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";

class SignUp extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form className="mainSignup">
              <p className="h5 text-center mb-4">Enter email and password to register</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn className="button" href="/login">Submit</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SignUp;