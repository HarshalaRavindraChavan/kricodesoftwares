import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {


  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { id: 1, category: "design", imageUrl: "img/portfolio-1.jpg", projectName: "Project 1" },
    { id: 2, category: "development", imageUrl: "img/portfolio-2.jpg", projectName: "Project 2" },
    { id: 3, category: "design", imageUrl: "img/portfolio-3.jpg", projectName: "Project 3" },
    { id: 4, category: "development", imageUrl: "img/portfolio-4.jpg", projectName: "Project 4" },
    { id: 5, category: "design", imageUrl: "img/portfolio-3.jpg", projectName: "Project 5" },
    { id: 6, category: "development", imageUrl: "img/portfolio-4.jpg", projectName: "Project 6" },
    // Add more portfolio items here
  ];

  const filteredPortfolioItems = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  const limitedPortfolioItems = filter === "design" ? filteredPortfolioItems.slice(0, 3) : filteredPortfolioItems;


  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "black",
          display: "block",
          right: "20px",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <span className="custom-arrow">Next</span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "black",
          display: "block",
          left: "20px",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <span className="custom-arrow">Prev</span>
      </div>
    );
  };

  const slides = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
      alt: "Alternative text for image 1",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
      alt: "Alternative text for image 2",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
      alt: "Alternative text for image 1",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
      alt: "Alternative text for image 2",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <div className="container-fluid  py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn ">About Us</h1>
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
                      About
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
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="section-title position-relative mb-4 pb-2">
                <h6 className="position-relative text-primary ps-4">
                  About Us
                </h6>
                <h2 className="mt-2">
                  The best SEO solution with 10 years of experience
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
                    Award Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Fair Prices
                  </h6>
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2" />
                    24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2" />
                    Fair Prices
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
      {/* About End */}
      {/* Newsletter Start */}
      <div
        className="container-xxl bg-primary newsletter my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container px-lg-5">
          <div className="row align-items-center" style={{ height: 250 }}>
            <div className="col-12 col-md-6">
              <h3 className="text-white">Ready to get started</h3>
              <small className="text-white">
                Diam elitr est dolore at sanctus nonumy.
              </small>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Your Email"
                  style={{ height: 48 }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4" />
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center mb-n5 d-none d-md-block">
              <img
                className="img-fluid mt-5"
                style={{ height: 250 }}
                src="img/newsletter.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
      {/* Team Start */}
      {/* <div className="slider-section">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={slide.url} alt={slide.alt} />
            </div>
          ))}
        </Slider>
      </div> */}

<div className="container-xxl py-5">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="mt-2">Our Client Logo's</h2>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-12 text-center">
            <ul className="list-inline" id="portfolio-flters">
              <li className={`btn px-3 pe-4 ${filter === 'all' && 'active'}`} onClick={() => setFilter("all")}>All</li>
              <li className={`btn px-3 pe-4 ${filter === 'design' && 'active'}`} onClick={() => setFilter("design")}>Design</li>
              <li className={`btn px-3 pe-4 ${filter === 'development' && 'active'}`} onClick={() => setFilter("development")}>Development</li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {limitedPortfolioItems.map(item => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <div className="position-relative rounded overflow-hidden">
                <img className="img-fluid w-100" src={item.imageUrl} alt="" />
                <div className="portfolio-overlay">
                  <a className="btn btn-light" href={item.imageUrl} data-lightbox="portfolio">
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

export default About;
