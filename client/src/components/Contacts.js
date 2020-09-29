import React from "react";
import {MDBBtn} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';

// Footer which contains contact information and links
function Contacts() {
  return (
    <footer className="contact-content">
      <div>
        <MDBBtn className="button" href="mailto: noahsoukupraesch@gmail.com">
          Request Login
        </MDBBtn>
        <h3>Contact Us:</h3>
        <div>
          <div class="column">
            <h4>Rodolfo Gauna</h4>
            <MDBBtn className="button" href="https://github.com/rgauna">
              GitHub
            </MDBBtn>
            <br></br>
            <MDBBtn className="button" href="mailto: rudy.gauna@gmail.com">
              Email
            </MDBBtn>
          </div>
          <div class="column">
            <h4>Noah Soukup</h4>
            <MDBBtn className="button" href="https://github.com/noahnr">
              GitHub
            </MDBBtn>
            <br></br>
            <MDBBtn
              className="button"
              href="mailto: noahsoukupraesch@gmail.com"
            >
              Email
            </MDBBtn>
          </div>
          <div class="column">
            <h4>Christopher James Carreon</h4>
            <MDBBtn className="button" href="https://github.com/CCARREON16">
              GitHub
            </MDBBtn>
            <br></br>
            <MDBBtn className="button" href="mailto: mrwiggles6545@yahoo.com">
              Email
            </MDBBtn>
          </div>
          <div class="column">
            <h4>Joseph Arocha</h4>
            <MDBBtn className="button" href="https://github.com/hozerpffp2009">
              GitHub
            </MDBBtn>
            <br></br>
            <MDBBtn className="button" href="mailto: hozerpffp2009@gmail.com">
              Email
            </MDBBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export Contacts
export default Contacts;
