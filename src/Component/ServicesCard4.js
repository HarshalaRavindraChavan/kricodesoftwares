import React from "react";

const ServicesCard4 = () => {
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
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative">
                <h2 className="mt-2">Mobile Application Development</h2>
              </div>
              <p className="mb-4">
                Our Mobile Application Development service empowers businesses
                to reach their customers on the go, delivering intuitive and
                engaging mobile experiences across iOS and Android platforms.
                From concept to launch, our expert team of mobile app developers
                collaborates closely with you to design, develop, and deploy
                custom mobile solutions that drive user engagement,
                satisfaction, and retention.
              </p>
              <div className=" position-relative  ">
                <h2 className="mt-2">Benefits</h2>
              </div>
              <p className="mb-4">
                Increased Reach and Engagement: Mobile applications enable you to
                connect with customers anytime, anywhere, driving engagement,
                loyalty, and repeat business. Enhanced Brand Visibility: By
                offering a mobile app, you elevate your brand presence and
                visibility in the crowded mobile marketplace, standing out from
                competitors.
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
                src="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard4;
