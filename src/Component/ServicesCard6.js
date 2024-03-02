import React from "react";

const ServicesCard6 = () => {
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
                <h2 className="mt-2">Full-Stack Web Development Solutions</h2>
              </div>
              <p className="mb-4">
                Our Full-Stack Web Development Solutions encompass a
                comprehensive range of services, including Static Website
                Development, Dynamic Web Application Development, and E-commerce
                Website Development Encrypting sensitive data to protect it from
                unauthorized access.websites to complex e-commerce platforms,
                our full-stack development.
              </p>
              <div className=" position-relative  ">
                <h2 className="mt-2">Benefits</h2>
              </div>
              <p className="mb-4">
                Comprehensive Solutions: Our full-stack web development
                solutions cover all aspects of web development, from static
                websites to dynamic web applications and e-commerce platforms,
                providing end-to-end support for your online presence.
                Customization and Flexibility: We tailor our web solutions to
                your specific business needs and requirements, providing custom
                features, functionalities, and designs that align with your
                brand identity and objectives.
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
                src="https://miro.medium.com/v2/resize:fit:800/1*iLa3E1yYHoYhOloCqQv36Q.png"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard6;
