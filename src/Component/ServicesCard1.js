import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesCard1 = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };
  return (
    <div>
        <div className="container-fluid  py-5 bg-primary hero-header mb-5">
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

      <div className="container py-5">
        <div className="container ">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              // style={{ paddingTop: "60px" }}
            >
              <div className="position-relative">
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
              <div className=" position-relative ">
                <h2 className="mt-2">Benefits</h2>
              </div>
              <p className="mb-4">
                Improved Search Rankings: Our SEO efforts help your website rank
                higher in search engine results, increasing visibility and
                driving more organic traffic.Increased Organic Traffic: By
                targeting relevant keywords and optimizing your website's
                content, we attract qualified leads who are actively searching
                for products or services like yours.
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
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard1;
