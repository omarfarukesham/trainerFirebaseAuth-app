import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "../../images/slider.jpg";
import slider1 from "../../images/slider1.jpg";

const Home = () => {
  return (
    <>
      <div className="carousel--slider  p-3">
        <Carousel variant="white">
          <Carousel.Item>
            <img className="d-block w-100" src={slider} alt="First slide" />
            <Carousel.Caption className="slider--content ">
             
              <button className="btn btn-warning">Book Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="First slide" />
            <Carousel.Caption className="slider--content ">
              
              <button className="btn btn-warning">Book Now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider} alt="First slide" />
            <Carousel.Caption className="slider--content ">
              
              <button className="btn btn-warning">Book Now </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
