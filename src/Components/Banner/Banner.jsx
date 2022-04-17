import React from "react";

import Banner from "../../images/banner1.png";
import Banner1 from "../../images/banner2.png";

const Banners = () => {
  return (
    <div className="container">
      <div className="row gx-4 justify-content-center">
        <div className="d-flex">
          <div className="shadow p-3 mb-5 bg-body rounded w-50 mx-3 d-flex justify-content-between">
           
            <div>
              <img className="img-fluid" src={Banner1} alt="" />
            </div>
          </div>
          <div className="shadow p-3 mb-5 bg-body rounded w-50 mx-3 d-flex justify-content-between">
            <div>
              <img className="img-fluid" src={Banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
