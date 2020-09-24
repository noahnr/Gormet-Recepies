import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withOktaAuth} from "@okta/okta-react";
// import Keyframes from '@keyframes/core';
import {MDBBtn} from "mdbreact";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import style from "../App.css";

export default withOktaAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    async login() {
      this.props.authService.login("/Recipes");
    }

    async logout() {
      this.props.authService.logout("/");
    }

    render() {
      if (this.props.authState.isPending) return null;

      const button = this.props.authState.isAuthenticated ? (
        <button className="stdBtn " onClick={this.logout}>
          Logout
        </button>
      ) : (
        <button className="stdBtn" onClick={this.login}>
          Login
        </button>
      );

      return (
         <>
          <div class="container">
            <div className="carousel">
              <h1>Welcome Folks!</h1>
              <p>
                Please sign up to view available recipes. If already a member,
                please log in.
              </p>
              <div class="logbtn">
                <MDBBtn className="button" href="/login">
                  Login
                </MDBBtn>
              </div>
              <div class="signbtn">
                <MDBBtn className="button" href="/signup">
                  Sign Up
                </MDBBtn>
              </div>

              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={40}
                totalSlides={5}
              >
                <Slider>
                  <Slide index={0}>
                    <img
                      src="https://i.imgur.com/6Q6JyhA.jpg"
                      class="mySlides"
                      alt="nachos"
                      width="300"
                      height="500px"
                    ></img>
                    <div class="text"> Beef and Chicken Fajita Nachos</div>
                  </Slide>
                  <Slide index={1}>
                    <img
                      src="https://i.imgur.com/FcZ6xe0.jpg"
                      class="mySlides"
                      alt="ribs"
                      width="300"
                      height="500px"
                    ></img>
                    <div class="text">Honey Cajun Style Pork Ribs</div>
                  </Slide>
                  <Slide index={2}>
                    <img
                      src="https://i.imgur.com/P9yBoXl.jpg"
                      class="mySlides"
                      alt="sopapilla"
                      width="300"
                      height="500px"
                    ></img>
                    <div class="text">Handmade Sopapilla</div>
                  </Slide>
                  <Slide index={3}>
                    <img
                      src="https://i.imgur.com/aGy5cEr.jpg"
                      class="mySlides"
                      alt="pizza quesadilla"
                      width="300"
                      height="500px"
                    ></img>
                    <div class="text">Pizza Quesadilla</div>
                  </Slide>
                  <Slide index={4}>
                    <img
                      src="https://i.imgur.com/FySafd2.png"
                      class="mySlides"
                      alt="Smoked Dr Pepper ham"
                      width="300"
                      height="500px"
                    ></img>
                    <div class="text">Smoked Dr Pepper Ham</div>
                  </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
            </div>
          </div>
          <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Recipes">Recipes</Link>
            <br />
            {button}
          </div>
          <div class="footer">
            <div class="row">
              <h3>Contact Us:</h3>
              <div class="column">
                <h4>Rodolfo Guana</h4>
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
                <MDBBtn
                  className="button"
                  href="mailto: mrwiggles6545@yahoo.com"
                >
                  Email
                </MDBBtn>
              </div>
              <div class="column">
                <h4>Joseph Arocha</h4>
                <MDBBtn
                  className="button"
                  href="https://github.com/hozerpffp2009"
                >
                  GitHub
                </MDBBtn>
                <br></br>
                <MDBBtn
                  className="button"
                  href="mailto: hozerpffp2009@gmail.com"
                >
                  Email
                </MDBBtn>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
);

//noahsoukupraesch@gmail.com
