import React, { useState } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <div>
        <div className="container-fluid  py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn ">About Us</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#">
                        Pages
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(29, 29, 39, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: 600 }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-light px-4">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}
      {/* About Start */}
      <div className="container py-5">
        <div className="container ">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative mb-4 pb-2">
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
              <div className="d-flex align-items-center mt-4">
                <Link
                  className="btn btn-primary rounded-pill px-4 me-3"
                  onClick={openDetailsPage}
                  target="_blank"
                  to="/aboutcard"
                >
                  Read More
                </Link>
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
      {/* About End */}
      {/* Newsletter Start */}
      <div
        className="container bg-primary newsletter my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container ">
          <div className="row align-items-center" style={{ height: 250 }}>
            <div className="col-12 col-md-6">
              <h3 className="text-white">Ready to get started</h3>
              <small className="text-white">
                Diam elitr est dolore at sanctus nonumy.
              </small>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Your Email"
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
            <div className="col-md-6 text-center  d-none d-md-block">
              <img
                className="img-fluid"
                style={{ height: 250 }}
                src="img/newsletter.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
      {/* Team Start */}
      <div className="container bg-primary  wow fadeInUp "style={{height:'350px'}} >
        <div className="container py-5 ">
          <AliceCarousel
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
            autoPlay
            autoPlayInterval={2000}
            infinite
          >
            <div className="testimonial-item bg-transparent  border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-1.jpg"
                  style={{ width: 50, height: 50 }}
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-2.jpg"
                  style={{ width: 50, height: 50 }}
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className=" testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-3.jpg"
                  style={{ width: 50, height: 50 }}
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-transparent  border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-4.jpg"
                  style={{ width: 50, height: 50 }}
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default About;
