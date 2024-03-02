import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesCard1 = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };
  return (
    <div>
      <div className="container  p-0">
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn">Services</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
                <nav aria-label="breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container d-flex justify-content-center">
  <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s" style={{paddingTop:"100px"}}>
    <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
      <div className="service-icon flex-shrink-0">
        <i className="fa fa-home fa-2x"></i>
      </div>
      <div>
        <h5 className="mb-3">Search Engine Optimization (SEO)</h5>
        <p>
          Our Search Engine Optimization (SEO) service is designed to improve
          your website's visibility in search engine results pages (SERPs),
          driving organic traffic and increasing your online presence. Through
          a combination of on-page optimization, content strategy, and
          technical SEO, we help your website rank higher for relevant
          keywords and attract more qualified leads.
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
</div> */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ paddingTop: "60px" }}
            >
              <div className="section-title position-relative mb-4 pb-2">
                <h2 className="mt-2">Search Engine Optimization (SEO)</h2>
              </div>
              <p className="mb-4">
                Our Search Engine Optimization (SEO) service is designed to
                improve your website's visibility in search engine results pages
                (SERPs), driving organic traffic and increasing your online
                presence. Through a combination of on-page optimization, content
                strategy, and technical SEO, we help your website rank higher
                for relevant keywords and attract more qualified leads.
              </p>

              <div
                className="d-flex align-items-center mt-4"
                style={{ paddingLeft: "150px" }}
              >
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
                src="https://cdn.pixabay.com/photo/2023/03/11/08/52/search-engine-optimization-7843974_640.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard1;
