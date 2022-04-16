import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import logo from '../../images/logo.jpg'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3 fw-bold " >
           {/* <img className="logo--design" src={logo} alt="" /> */}
           Corporate <span className="logo--design"> Trainer</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
       
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-end">
              <li className="nav-item">
                <CustomLink className="nav-link  text-dark " aria-current="page" to="/home" >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink  to='/blogs' className="nav-link text-dark" >
                  Blogs
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink  to='/services' className="nav-link text-dark" >
                  Services
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link text-dark" to="/about" >
                  About
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link text-dark" to="/login">
                  Login
                </CustomLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
