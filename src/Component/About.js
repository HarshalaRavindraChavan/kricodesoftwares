import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn">About Us</h1>
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
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
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
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Award Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
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
                <a className="btn btn-primary rounded-pill px-4 me-3" href>
                  Read More
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-primary btn-square me-3" href>
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-outline-primary btn-square" href>
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
        className="container-xxl bg-primary newsletter my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container px-lg-5">
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
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img
                className="img-fluid mt-5"
                style={{ height: 250 }}
                src="img/newsletter.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Team
            </h6>
            <h2 className="mt-2">Meet Our Team Members</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: 75 }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src="img/team-1.jpg"
                    alt
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Jhon Doe</h5>
                  <small>CEO</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: 75 }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src="img/team-2.jpg"
                    alt
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Emma William</h5>
                  <small>Manager</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="team-item">
                <div className="d-flex">
                  <div
                    className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                    style={{ width: 75 }}
                  >
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square text-primary bg-white my-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                  <img
                    className="img-fluid rounded w-100"
                    src="img/team-3.jpg"
                    alt
                  />
                </div>
                <div className="px-4 py-3">
                  <h5 className="fw-bold m-0">Noah Michael</h5>
                  <small>Designer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
