import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const logOut = () =>{
    signOut(auth);
  }


  return (
    <div className="container-fluid bg-light py-3 sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3 fw-bold " title="This is Omar Faruk, working as a Corporate Trainer" >
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
              { user?.uid ? <button onClick={logOut} className="btn btn-outline-primary">SignOut</button>:
                 <CustomLink className=" text-black fw-bold icon--plus nav-link " to="/login"> <i className="fa-solid fa-user-plus"></i>Login</CustomLink>
               }
                {/* <CustomLink className="nav-link text-dark" to="/login">
                  Login
                </CustomLink> */}
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
