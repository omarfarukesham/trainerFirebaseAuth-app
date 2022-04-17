import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="card--design">
          {products.map((product) => (
            <SingleProduct key={product.id} product={product}>
              {" "}
            </SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
