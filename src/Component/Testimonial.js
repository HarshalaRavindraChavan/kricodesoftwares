import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn">Testimonial</h1>
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
                      Testimonial
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
      {/* Testimonial Start */}
      <div
        className="container-xxl bg-primary testimonial py-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ margin: "6rem 0" }}
      >
        <div className="container py-5 px-lg-5">
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item bg-transparent border rounded text-white p-4">
              <i className="fa fa-quote-left fa-2x mb-3" />
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="img/testimonial-1.jpg"
                  alt="Client"
                  style={{ width: 50, height: 50 }}
                />
                <div className="ps-3">
                  <h6 className="text-white mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            {/* Add more testimonial items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
