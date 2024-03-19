import React from "react";
import { Link } from "react-router-dom";
// import logoSm from "../../public/kricode-logo-ORIGINAL(2).png";

const Header = () => {
  return (
    <div className="container-fluid p-0 w-auto ">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href className="navbar-brand p-0">
          <h1 className="p-2">
            <img
              src={require("../../Component/Images/ea6716f0-689f-4d03-832e-704374658a1c.jpg")}
              alt=""
              height="200"
              width="200"
              style={{
                mixBlendMode: "normal",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              {" "}
              {/* Corrected the link */}
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Services
            </Link>

            <Link to="/team" className="nav-item nav-link">
              Our Team
            </Link>

            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <butaton
            type="button"
            className="btn text-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search" />
          </butaton>
          {/* <a
            href="https://htmlcodex.com/startup-company-website-template"
            className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
          >
            Pro Version
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
