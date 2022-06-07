import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "../../images/slider.jpg";
import slider1 from "../../images/slider1.jpg";
import Banners from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import bgmea from '../../images/BGMEA2.PNG'
import a2i from '../../images/a2i.jpg'
import min from '../../images/10min.jpg'
import ilo from '../../images/ilo.png'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home-corporate-Trainer</title>
    </Helmet>
      <div className="carousel--slider container p-3">
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
      <div className="my-5 container">
        <h1 className="fs-2 fw-bold text-center">Work <span className="text-warning">Experiences</span></h1>
        <div className="row d-flex justify-content-between align-items-center">

          <div className="col-md-4 col-lg-3 col-sm-6">
            <img className="w-75"  src={bgmea} alt="experience images" />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6">
            <img className="w-75" src={min} alt="experience images" />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6">
            <img className="w-75" src={ilo} alt="experience images" />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6">
            <img className="w-75" src={a2i} alt="experience images" />
          </div>
         
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
