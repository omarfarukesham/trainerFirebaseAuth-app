import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Details from "../Details/Details";
import Footer from "../Footer/Footer";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <Helmet>
      <title>Services-trainer</title>
    </Helmet>
      <div className="container">
          <h1 className="fs-1 fw-bold text-center">My Most On Demand Services</h1>
      <div className="row">
        
          {products.map((product) => (
            <Details key={product.id} details={product}></Details>
          ))}
      
      </div>
    </div>
    <div className="mt-5">
     <Footer></Footer>
    </div>
 
    </>
  
  );
};

export default Services;
