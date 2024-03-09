import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <div className="container-fluid py-5 bg-primary hero-header mb-5">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">
              <h1 className="text-white animated zoomIn">Our Team</h1>
              <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
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
                    Team
                  </li>
                </ol>
              </nav>
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
      {/* Team Start */}
      {/* <div className="container py-5">
          <div className="container ">
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
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
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
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
        </div> */}
      <div className="container py-5">
        <div className="container ">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative mb-4 pb-2">
                <h6 className="position-relative text-primary ps-4">
                  Our Team{" "}
                </h6>
                <h2 className="mt-2" style={{ fontSize: "20px" }}>
                  Powered By Passion Fueled by Collaboration Your Success Iss
                  Our Team's Triumph
                </h2>
              </div>
              <p className="mb-4">
                At Kricode Softwares, we're not just a team we're a powerhouse
                of passion and collaboration. With each member bringing their
                unique talents to the table, and our trusted partners by our
                side, we're on a mission to elevate your success to new heights.
                Together, we innovate, inspire, and ignite possibilities,
                turning visions into reality and challenges into triumphs. When
                you partner with us, you're not just getting a solution; you're
                gaining a dedicated team committed to making your dreams come
                true.
              </p>

              <div className="d-flex align-items-center mt-4">
                {/* <Link
                  className="btn btn-primary rounded-pill px-4 me-3"
                  onClick={openDetailsPage}
                  target="_blank"
                  to="/aboutcard"
                >
                  Read More
                </Link> */}
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
                src="https://us.123rf.com/450wm/pressmaster/pressmaster1312/pressmaster131200084/24203848-group-of-joyful-business-partners-looking-at-camera-with-smiles-in-office.jpg?ver=6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
