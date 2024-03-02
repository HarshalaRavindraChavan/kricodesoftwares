import React from "react";

const ServicesCard5 = () => {
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

      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative">
                <h2 className="mt-2">Web Development Solutions</h2>
              </div>
              <p className="mb-4">
                Our Web Development Solutions service empowers businesses to
                establish a strong online presence and achieve their digital
                goals through custom web solutions tailored to their unique
                needs. From simple websites to complex web applications, our
                team of experienced developers leverages cutting-edge
                technologies and best practices to deliver high-quality,
                scalable.
              </p>
              <div className=" position-relative  ">
                <h2 className="mt-2">Benefits</h2>
              </div>
              <p className="mb-4">
                Enhanced Online Presence: A professionally designed and
                developed website enhances your brand visibility, credibility,
                and authority in the digital marketplace, attracting more
                visitors and opportunities. Improved User Experience: A
                user-friendly and responsive website provides a seamless and
                intuitive browsing experience for visitors, driving engagement,
                satisfaction, and conversions.
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
                src="https://www.extwebtech.com/wp-content/uploads/2023/05/website-development-company.webp"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard5;
