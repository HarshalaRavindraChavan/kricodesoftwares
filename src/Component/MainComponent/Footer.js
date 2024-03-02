import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-3" /> 7972276747 / 9322359906{" "}
            </p>
            <p>
              <i className="fa fa-envelope me-3" />
              kricodesoftwares@gmail.com{" "}
            </p>
            <div className="d-flex pt-2" style={{paddingLeft:"50px"}}>
              {/* <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter" />
              </a> */}
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/profile.php?id=61556115733343"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.youtube.com/"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.instagram.com/kricodesoftwares/?hl=en"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.linkedin.com/company/101652483/admin/feed/posts/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4" style={{paddingRight:"150px"}}>Popular Link</h5>
            <Link className="btn btn-link" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link"to="/service">
           Services
            </Link>
            <Link className="btn btn-link" to="/team">
          Our Team
            </Link>
            <Link className="btn btn-link" to="/contact">
            Contact Us
            </Link>
          </div>
          {/* <div className="col-md-6 col-lg-3">
        <h5 className="text-white mb-4">Project Gallery</h5>
        <div className="row g-2">
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-1.jpg" alt="Image" />
          </div>
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-2.jpg" alt="Image" />
          </div>
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-3.jpg" alt="Image" />
          </div>
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-4.jpg" alt="Image" />
          </div>
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-5.jpg" alt="Image" />
          </div>
          <div className="col-4">
            <img className="img-fluid" src="img/portfolio-6.jpg" alt="Image" />
          </div>
        </div>
      </div> */}
          <div className="col-md-4 col-lg-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>
              Ready to take your digital presence to the next level? Contact us
              today to learn more about how Kricode Software can help you
              achieve your digital goals and drive success for your business.{" "}
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: 48 }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href>Home</a>
                <a href>Cookies</a>
                <a href>Help</a>
                <a href>FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
