import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Services from "../Services/Services";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let navigate = useNavigate();
  
  const reviewDetails =() => {
         navigate('/services')
   }

  return (
    <>
      <div className="container">
        <div className="row">
            {products.slice(0,4).map((product) => (
              <SingleProduct key={product.id} product={product}>
                {" "}
              </SingleProduct>
            ))}
        
        </div>

        <button onClick={reviewDetails} className='btn btn-primary'>Explore More..</button>   
      </div>
    </>
  );
};

export default Products;
