import React from "react";

const ServicesCard3 = () => {
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
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative">
                <h2 className="mt-2">Quality Assurance and Testing</h2>
              </div>
              <p className="mb-4">
                Our Quality Assurance and Testing service ensures that your
                software applications meet the highest standards of quality,
                reliability, and performance. From functional testing to
                usability testing, our experienced QA team employs rigorous
                testing methodologies and best practices to identify defects,
                Complexities in testing modern applications like mobile apps,
                IoT devices, and cloud-based
              </p>
              <div className=" position-relative  ">
                <h2 className="mt-2">Benefits</h2>
              </div>
              <p className="mb-4">
                Enhanced Product Quality: Our QA and testing services help you
                deliver high quality software products that meet user
                expectations and deliver value. Reduced Risks: By identifying
                and addressing defects early in the development process, we
                minimize the risk of costly errors and delays down the line.
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
                src="https://datafloq.com/wp-content/uploads/2021/12/blog_pictures2FQuality_Assurance_Testing_8xXpzGg.jpg"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard3;
