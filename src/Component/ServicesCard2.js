import React from "react";

const ServicesCard2 = () => {
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
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              
            >
              <div className=" position-relative">
                <h2 className="mt-2">Data Science Solutions</h2>
              </div>
              <p className="mb-4">
                Our Data Science Solutions service leverages advanced analytics
                and machine learning techniques to unlock valuable insights from
                your data, enabling datadriven decision-making and business
                growth. Whether you're looking to extract actionable insights,
                build predictive models, or optimize processes, our team of data
                scientists is here to help you harness the power of your data.
              </p>
              <div className=" position-relative  ">
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
                src="https://media.licdn.com/dms/image/D4D12AQFHPmRYaRtnwg/article-cover_image-shrink_720_1280/0/1693052551743?e=2147483647&v=beta&t=GtSivlN7TrR6unT7ymYpDiyoBKYbipZbX81Quqx8KPg"
                style={{borderRadius:"30px"}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard2;
