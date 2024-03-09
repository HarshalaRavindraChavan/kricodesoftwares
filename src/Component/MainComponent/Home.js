import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };

  const portfolioItems = [
    {
      id: 1,
      category: "design",
      imageUrl:
        "https://www.idexxcurrents.com/media/filer_public_thumbnails/filer_public/58/f0/58f0ba1e-f6aa-4378-8736-ac64d9b406df/quality-assurance-servic_1.jpg__800x500_q80_crop_subject_location-570%2C252_subsampling-2.jpg",
      // projectName: "Project 1",
    },
    {
      id: 2,
      category: "development",
      imageUrl:
        "https://www.earthtechy.com/wp-content/uploads/2022/01/Why-Mobile-App-Development-Is-Important-for-Business.png",
      // projectName: "Project 2",
    },
    {
      id: 3,
      category: "design",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*z6LU8OX3pG_-RgVi",
      // projectName: "Project 3",
    },
    {
      id: 4,
      category: "development",
      imageUrl:
        "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
      // projectName: "Project 4",
    },
    {
      id: 5,
      category: "design",
      imageUrl: "https://www.clarifybusiness.com/wp-content/uploads/2023/11/Advanced-SEO-Tactics.png",
      // projectName: "Project 5",
    },
    {
      id: 6,
      category: "development",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQEv2f5_KSYr5A/article-cover_image-shrink_720_1280/0/1683020912703?e=2147483647&v=beta&t=TNLEYIwy6UN2ZaXMkiPeo5Ig8frpepjVXDgw-NmQyJ8",
      // projectName: "Project 6",
    },
  ];
  const filteredPortfolioItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);
  const limitedPortfolioItems =
    filter === "design"
      ? filteredPortfolioItems.slice(0, 3)
      : filteredPortfolioItems;

  return (
    <div>
      <div className="container-fluid py-5 bg-primary hero-header mb-5 w-auto">
        <div className="container my-5 py-5 ">
          <div className="row g-5 py-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn">
                Kricode Software Your Trusted Partner For Innovative Software
                Solutions And Beyond
              </h1>
              <p className="text-white pb-3 animated zoomIn">
                Kricode Softwares Offers Comprehensive Software Solutions,
                Including Data Science, Quality Testing, Mobile Apps, And Web
                Development, Digital Marketing, Full-Stack Web Development. Our
                Expertise Ensures Innovation And Excellence In Navigating The
                Digital Landscape For Your Success.
              </p>
              <a
                href
                className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
              >
                Free Quote
              </a>
              <Link
                to="/contact"
                className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
              >
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6 text-center animated-image" >
              {/* <img className="img-fluid" src="img/hero.png" alt /> */}
              <img
           
                src={require("../../Component/Images/2202757-removebg-preview (4).png")}
                alt=""
                height="500"
                width="735"
                style={{
                  mixBlendMode: "normal",
                  paddingBottom:'100px',
                  // backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="container ">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className=" position-relative mb-4 pb-2">
                <h6 className="position-relative text-primary ps-4">
                  About Us
                </h6>
                <h2 className="mt-2" style={{ fontSize: "20px" }}>
                  Building Tomorrow's Digital Landscape Kricode Softwares,
                  Leading with Data Science, Quality Testing, Mobile App, And
                  Web Development Expertise
                </h2>
              </div>
              <p className="mb-4">
                At Kricode Software, we are passionate about crafting innovative
                digital solutions that empower businesses to thrive in the
                ever-evolving digital landscape. With a focus on excellence,
                creativity, and customer satisfaction, we are committed to
                delivering cutting-edge software solutions that drive growth,
                efficiency, and success for our clients.
              </p>
              <div className="row g-3">
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Passionate
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Unstoppable
                  </h6>
                </div>
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Limitless possibilities
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Future-proof
                  </h6>
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Vision-Driven
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Empowering
                  </h6>
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Futuristic
                  </h6>
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Game-Changing
                  </h6>
                </div>
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    Unleashing Potential
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <Link
                  className="btn btn-primary rounded-pill px-4 me-3"
                  onClick={openDetailsPage}
                  target="_blank"
                  to="/aboutcard"
                >
                  Read More
                </Link>
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
                src="img/about.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="container">
          <div
            className=" text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Services
            </h6>
            <h2 className="mt-2" style={{ fontSize: "20px" }}>
              Innovate, Evolve, Succeed: Your Comprehensive Hub for Data
              Science, Quality Testing, Mobile & Web Development Solutions.
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <div className="service-item h-auto d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <i className="fas fa-search  fa-2x"></i>
                </div>
                <div>
                  <h5 className="mb-3">Search Engine Optimization (SEO)</h5>
                  <p>
                    Our Search Engine Optimization (SEO) service is designed to
                    improve your website's visibility in search engine results
                    pages (SERPs), driving organic traffic and increasing your
                    online presence. Through a combination of on-page
                    optimization, content strategy, and technical SEO, we help
                    your website rank higher for relevant keywords and attract
                    more qualified leads.
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
                  <i className="fas fa-cogs fa-2x" />
                </div>
                <h5 className="mb-3">Data Science Solutions</h5>
                <p>
                  Our Data Science Solutions service leverages advanced
                  analytics and machine learning techniques to unlock valuable
                  insights from your data, enabling datadriven decision-making
                  and business growth. Whether you're looking to extract
                  actionable insights, build predictive models, or optimize
                  processes, our team of data scientists is here to help you
                  harness.
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
                  <i className="fas fa-check-circle fa-2x" />
                </div>
                <h5 className="mb-3">Quality Assurance and Testing</h5>
                <p>
                  Our Quality Assurance and Testing service ensures that your
                  software applications meet the highest standards of quality,
                  reliability, and performance. From functional testing to
                  usability testing, our experienced QA team employs rigorous
                  testing methodologies and best practices to identify defects,
                  Complexities in testing modern applications like mobile apps,
                  IoT devices.
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
                  <i className="fas fa-mobile-alt fa-2x" />
                </div>
                <h5 className="mb-3">Mobile Application Development</h5>
                <p>
                  Our Mobile Application Development service empowers businesses
                  to reach their customers on the go, delivering intuitive and
                  engaging mobile experiences across iOS and Android platforms.
                  From concept to launch, our expert team of mobile app
                  developers collaborates closely with you to design, develop,
                  and deploy custom mobile solutions that drive user engagement,
                  satisfaction.
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
                  <i className="fas fa-code fa-2x" />
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
                  <i className="fas fa-cubes fa-2x" />
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

      {/* <div className="container py-5">
        <div className="container ">
          <div
            className=" position-relative text-center mb-5 pb-2 wow fadeInUp"
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

      <div className="container-fluid py-5">
        <div className="container ">
          <div className="row wow fadeInUp">
            <h2 className=" position-relative text-center wow fadeInUp">
              Our Client Logo's
            </h2>
            <div className="col-12 text-center">
              <ul className="list-inline" id="portfolio-flters">
                <li
                  className={`btn px-3 pe-4 ${filter === "all" && "active"}`}
                  onClick={() => setFilter("all")}
                >
                  All
                </li>
                <li
                  className={`btn px-3 pe-4 ${filter === "design" && "active"}`}
                  onClick={() => setFilter("design")}
                >
                  Design
                </li>
                <li
                  className={`btn px-3 pe-4 ${
                    filter === "development" && "active"
                  }`}
                  onClick={() => setFilter("development")}
                >
                  Development
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            {limitedPortfolioItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
              >
                <div className="position-relative rounded overflow-hidden">
                  <img className="img-fluid w-100" src={item.imageUrl} alt="" />
                  <div className="portfolio-overlay">
                    <a
                      className="btn btn-light"
                      href={item.imageUrl}
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div className="mt-auto">
                      <small className="text-white">
                        <i className="fa fa-folder me-2"></i>
                        {item.category}
                      </small>
                      <a className="h5 d-block text-white mt-1 mb-0" href="#">
                        {item.projectName}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
