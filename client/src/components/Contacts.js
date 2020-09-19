import React from "react";
import {MDBBtn} from "mdbreact";

function Contacts() {
    return (
        <footer className="contactFooter">
            <h3>Contact Us:</h3>
            <br></br>
            <div className="contact-content">
            <h4>Rodolfo Guana</h4>
            <MDBBtn href="https://github.com/rgauna">GitHub</MDBBtn>
            <MDBBtn href="mailto: rudy.gauna@gmail.com">Email</MDBBtn>
            <h4>Noah Soukup</h4>
            <MDBBtn href="https://github.com/noahnr">GitHub</MDBBtn>
            <MDBBtn href="mailto: noahsoukupraesch@gmail.com">Email</MDBBtn>
            <h4>Christopher James Carreon</h4>
            <MDBBtn href="https://github.com/CCARREON16">GitHub</MDBBtn>
            <MDBBtn href="mailto: mrwiggles6545@yahoo.com">Email</MDBBtn>
            <h4>Joseph Arocha</h4>
            <MDBBtn href="https://github.com/hozerpffp2009">GitHub</MDBBtn>
            <MDBBtn href="mailto: hozerpffp2009@gmail.com">Email</MDBBtn>
            </div>
        </footer>
    )
}

export default Contacts;