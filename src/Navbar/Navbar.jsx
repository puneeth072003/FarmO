import React from "react";
import "../scss/styles.scss";
import Logo from "../assets/farmO.png";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const searchProducts = () => {};
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/product" className="text-decoration-none">
                <a className="nav-link active fs-5 fw-bold" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="text-decoration-none">
                <a className="nav-link active fs-5 fw-bold" aria-current="page">
                  Weather
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="text-decoration-none">
                <a className="nav-link active fs-5 fw-bold" aria-current="page">
                  Cart
                </a>
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchProducts}
            >
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
