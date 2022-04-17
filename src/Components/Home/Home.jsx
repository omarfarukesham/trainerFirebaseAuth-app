import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "../../images/slider.jpg";
import slider1 from "../../images/slider1.jpg";
import Banners from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

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
      <div className="my-5">
        <Banners></Banners>
      </div>
      <div>
        <h1 className="text-center fs-1 fw-bold">Get <span className="text-warning">Services</span></h1>
        <Products></Products>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
