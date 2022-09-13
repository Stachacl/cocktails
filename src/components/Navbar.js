import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {

  const [isNavExpanded, setIsNavExpended] = useState(false);

  return (

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <img src={logo} alt="the cocktail club est 1896" className="logo" />
        </Link>

        <button onClick={(e) => {
          setIsNavExpended (!isNavExpanded);
        }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>


        <div className={ 
          isNavExpanded? "navbar-collapse collapse show" : "navbar-collapse collapse"
        }
          id="navbarSupportedContent">
          <div class="w-100 d-flex justify-content-end">
            <ul class="navbar-nav mb-2 mb-lg-0 me-1">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
