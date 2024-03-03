import React, { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };
  return (
    <div>
      <div>
        <div className="container-fluid py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn">Service</h1>
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
                      Service
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
      {/* Service Start */}
      <div className="container py-5">
        <div className="container">
          <div
            className="  text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 className="mt-2">What Solutions We Provide</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x"></i>
                </div>
                  <div>
                    <h5 className="mb-3">Search Engine Optimization (SEO)</h5>
                    <p>
                      Our Search Engine Optimization (SEO) service is designed
                      to improve your website's visibility in search engine
                      results pages (SERPs), driving organic traffic and
                      increasing your online presence. Through a combination of
                      on-page optimization, content strategy, and technical SEO,
                      we help your website rank higher for relevant keywords and
                      attract more qualified leads.
                    </p>
                  </div>
                  <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard1"
                  >
                    Read More
                  </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Data Science Solutions</h5>
                <p>
                  Our Data Science Solutions service leverages advanced
                  analytics and machine learning techniques to unlock valuable
                  insights from your data, enabling datadriven decision-making
                  and business growth. Whether you're looking to extract
                  actionable insights, build predictive models, or optimize
                  processes, our team of data scientists is here to help you
                  harness the power of your data.
                </p>
                <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard2"
                  >
                    Read More
                  </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Quality Assurance and Testing</h5>
                <p>
                  Our Quality Assurance and Testing service ensures that your
                  software applications meet the highest standards of quality,
                  reliability, and performance. From functional testing to
                  usability testing, our experienced QA team employs rigorous
                  testing methodologies and best practices to identify defects,
                  Complexities in testing modern applications like mobile apps,
                  IoT devices, and cloud-based
                </p>
                <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard3"
                  >
                    Read More
                  </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Mobile Application Development</h5>
                <p>
                  Our Mobile Application Development service empowers businesses
                  to reach their customers on the go, delivering intuitive and
                  engaging mobile experiences across iOS and Android platforms.
                  From concept to launch, our expert team of mobile app
                  developers collaborates closely with you to design, develop,
                  and deploy custom mobile solutions that drive user engagement,
                  satisfaction, and retention.
                </p>
                <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard4"
                  >
                    Read More
                  </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3">Web Development Solutions</h5>
                <p>
                  Our Web Development Solutions service empowers businesses to
                  establish a strong online presence and achieve their digital
                  goals through custom web solutions tailored to their unique
                  needs. From simple websites to complex web applications, our
                  team of experienced developers leverages cutting-edge
                  technologies and best practices to deliver high-quality,
                  scalable.
                </p>
                <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard5"
                  >
                    Read More
                  </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fa fa-home fa-2x" />
                </div>
                <h5 className="mb-3"> Full-Stack Web Development Solutions</h5>
                <p>
                  Our Full-Stack Web Development Solutions encompass a
                  comprehensive range of services, including Static Website
                  Development, Dynamic Web Application Development, and
                  E-commerce Website Development Encrypting sensitive data to
                  protect it from unauthorized access.websites to complex
                  e-commerce platforms, our full-stack development.
                </p>
                <Link
                    className="btn px-3 mt-auto mx-auto"
                    onClick={openDetailsPage}
                    target="_blank"
                    to="/servicescard6"
                  >
                    Read More
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
