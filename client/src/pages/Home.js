import React from "react";
import {MDBBtn} from "mdbreact";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Home extends React.Component {
    render() {
        return(
            <div className="carousel">
            <h1>Welcome Folks!</h1>
                <p>Please sign up to view available recipes. If already a member, please log in.</p>
                <br></br>
                <div class="logbtn">
                <MDBBtn className="button" href="/login">Login</MDBBtn>
                </div>
                <br></br>
                <div class="signbtn">
                <MDBBtn className="button" href="/signup">Sign Up</MDBBtn>
                </div>
                <div class="container">
                <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={5}
      >
       
        <Slider>
          <Slide index={0}><img src="https://i.imgur.com/6Q6JyhA.jpg" class="mySlides" alt="nachos" width="300" height="500px"></img><div class="text"> Beef and Chicken Fajita Nachos</div></Slide>
          <Slide index={1}><img src="https://i.imgur.com/FcZ6xe0.jpg" class="mySlides" alt="ribs" width="300"  height="500px"></img><div class="text">Honey Cajun Style Pork Ribs</div></Slide>
          <Slide index={2}><img src="https://i.imgur.com/P9yBoXl.jpg" class="mySlides" alt="sopapilla" width="300"  height="500px"></img><div class="text">Handmade Sopapilla</div></Slide>
          <Slide index={3}><img src="https://i.imgur.com/aGy5cEr.jpg" class="mySlides" alt="pizza quesadilla" width="300"  height="500px"></img><div class="text">Pizza Quesadilla</div></Slide>
          <Slide index={4}><img src="https://i.imgur.com/FySafd2.png" class="mySlides" alt="Smoked Dr Pepper ham" width="300"  height="500px"></img><div class="text">Smoked Dr Pepper Ham</div></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        
      </CarouselProvider>
      </div>
            </div>
             
        );
    }
}

export default Home;