import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCard = () => {
    const [showDetails, setShowDetails] = useState(false);

    const openDetailsPage = () => {
      setShowDetails(true);
    };
  return (
    <div>
      <div className="container-fluid py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 ">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">About Us</h1>
            
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="container ">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title position-relative mb-4 pb-2">
                <h6 className="position-relative text-primary ps-4">
                  About Us
                </h6>
                <h2 className="mt-2">
                  The best SEO solution with 10 years of experience
                </h2>
              </div>
              <p className="mb-4">
                At Kricode Software, we are passionate about crafting innovative
                digital solutions that empower businesses to thrive in the
                ever-evolving digital landscape. With a focus on excellence,
                creativity, and customer satisfaction, we are committed to
                delivering cutting-edge software solutions that drive growth,
                efficiency, and success for our clients.
              </p>
              <div className="row g-3">
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Award Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Fair Prices
                  </h6>
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Fair Prices
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4" >
               
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://www.facebook.com/profile.php?id=61556115733343"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://www.youtube.com/"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn btn-outline-primary btn-square me-3"
                  href="https://www.instagram.com/kricodesoftwares/?hl=en"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
                  href="https://www.linkedin.com/company/101652483/admin/feed/posts/"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid wow zoomIn"
                data-wow-delay="0.5s"
                src="img/about.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
