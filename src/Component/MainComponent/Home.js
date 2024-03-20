import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [showDetails, setShowDetails] = useState(false);

  const openDetailsPage = () => {
    setShowDetails(true);
  };

  const handleButtonClick = () => {
    // Apply zoom-in animation to all images
    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
      image.classList.add("zoomIn");
    });
  };

  const portfolioItems = [
    {
      id: 1,
      category: "design",
      imageUrl:
        "https://www.idexxcurrents.com/media/filer_public_thumbnails/filer_public/58/f0/58f0ba1e-f6aa-4378-8736-ac64d9b406df/quality-assurance-servic_1.jpg__800x500_q80_crop_subject_location-570%2C252_subsampling-2.jpg",
      // projectName: "Project 1",
      className: "zoomIn",
    },
    {
      id: 2,
      category: "development",
      imageUrl:
        "https://www.earthtechy.com/wp-content/uploads/2022/01/Why-Mobile-App-Development-Is-Important-for-Business.png",
      // projectName: "Project 2",
      className: "zoomIn",
    },
    {
      id: 3,
      category: "design",
      imageUrl: "https://miro.medium.com/v2/resize:fit:1358/0*z6LU8OX3pG_-RgVi",
      // projectName: "Project 3",
      className: "zoomIn",
    },
    {
      id: 4,
      category: "development",
      imageUrl:
        "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
      // projectName: "Project 4",
      className: "zoomIn",
    },
    {
      id: 5,
      category: "design",
      imageUrl:
        "https://www.clarifybusiness.com/wp-content/uploads/2023/11/Advanced-SEO-Tactics.png",
      // projectName: "Project 5",
      className: "zoomIn",
    },
    {
      id: 6,
      category: "development",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQEv2f5_KSYr5A/article-cover_image-shrink_720_1280/0/1683020912703?e=2147483647&v=beta&t=TNLEYIwy6UN2ZaXMkiPeo5Ig8frpepjVXDgw-NmQyJ8",
      // projectName: "Project 6",
      className: "zoomIn",
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
      <div className="container-fluid py-4 py-md-5 bg-primary hero-header mb-5">
        <div className="container my-4 my-md-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-3 mb-lg-0">
              <h1 className="text-white mb-3 mb-md-4 animated zoomIn">
                Kricode Software - Your Trusted Partner For Innovative Software
                Solutions And Beyond
              </h1>
              <p className="text-white pb-3 pb-md-4 animated zoomIn">
                Kricode Softwares offers comprehensive software solutions,
                including data science, quality testing, mobile apps, and web
                development, digital marketing, full-stack web development. Our
                expertise ensures innovation and excellence in navigating the
                digital landscape for your success.
              </p>
              <Link
                to="/about"
                className="btn btn-light py-2 py-md-3 px-4 px-md-5 rounded-pill me-3 animated slideInLeft"
              >
                Free Quote
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline-light py-2 py-md-3 px-4 px-md-5 rounded-pill animated slideInRight"
              >
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6 text-center  animated-image">
              <img
                src={require("../../Component/Images/2202757-removebg-preview (4).png")}
                alt
                className="img-fluid rounded-lg"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6  mb-3 wow fadeInUp" data-wow-delay="0.1s">
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
                {/* <Link
                  className="btn color text-primary rounded-pill px-4 me-3"
                  to="/aboutcard"
                >
                  Read More
                </Link> */}
                <Link class="btn btn-primary rounded-pill px-4 me-3" to="/aboutcard">
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
              Innovate Evolve Succeed Your Comprehensive Hub For Data Science
              Quality Testing Mobile & Web Development Solutions.
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard1">
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard2">
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard3">
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard4">
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard5">
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
                <Link className="btn px-3 mt-auto mx-auto" to="/servicescard6">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div
            className="position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Clients Logo's
            </h6>
            <h2 className="mt-2">Recently Launched Projects</h2>
          </div>
          <div className="row g-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
              data-wow-delay="0.1s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/Bridgesang_logo (1).jpeg")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }} 
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/logo .png")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/lOGO (2) (2).png")}
                  alt=""
                  className="img-fluid "
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          
          </div>

          <div className="row g-4 portfolio-container">
            <div
              className="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
              data-wow-delay="0.1s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/a1fffe56-8b9f-42d7-9daa-8b21242dc2e1.jpg")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }} 
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/5711d960-ff91-4e5e-a3df-167469c284c9.jpg")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
              data-wow-delay="0.3s"
            >
              <div className="position-relative rounded overflow-hidden">
                <img
                  src={require("../../Component/Logo'S/4634e7e0-0783-4ac6-8f73-a090cb3f3d5c.jpg")}
                  alt=""
                  className="img-fluid "
                  style={{ width: "400px", height: "200px",backgroundColor:"blue",marginLeft:'80px' }}
                />
              </div>
            </div>
         
          </div>
        </div>
      </div> */}

      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="position-relative text-center mb-5 pb-2 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="position-relative d-inline text-primary ps-4">
              Our Clients Logo's
            </h6>
            <h2 className="mt-2">Recently Launched Projects</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: "-1px",
              justifyContent: "center",
            }}
            className="overlay-div"
          >
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/Bridgesang_logo (1).jpeg")}
                alt=""
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/logo .png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/lOGO (2) (2).png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/a1fffe56-8b9f-42d7-9daa-8b21242dc2e1.jpg")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/image-removebg-preview.png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/4634e7e0-0783-4ac6-8f73-a090cb3f3d5c.jpg")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              
              <img
                src={require("../../Component/Logo'S/WhatsApp Image 2024-03-12 at 11.16.56.jpeg")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}

              //khghkuyfuyuyryu7ci8ri75ici86
            >
              <img
                src={require("../../Component/Logo'S/Murli-LOGO (2).gif")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/logo.jpeg")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/logo-png (1).png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/Logo2.png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {/* <div
              style={{
                flex: "0 0 auto",
                width: "10%",
                maxWidth: "18.75rem",
                alignSelf: "center",
                textAlign: "center",
                margin: 20,
              }}
            >
              <img
                src={require("../../Component/Logo'S/4634e7e0-0783-4ac6-8f73-a090cb3f3d5c.jpg")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container ">
          <div className="row wow fadeInUp">
            <h2 className=" position-relative text-center wow fadeInUp">
              Our Projects
            </h2>
            <div className="col-12 text-center zoomIn" data-wow-delay="0.1s">
              <ul className="list-inline wow zoomIn" id="portfolio-flters">
                <li
                  className={`btn zoomIn px-3 pe-4 ${
                    filter === "all" && "active"
                  }`}
                  onClick={() => {
                    setFilter("all");
                    // handleButtonClick();
                  }}
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
          <div className="row g-4 portfolio-container wow zoomIn">
            {limitedPortfolioItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 zoomIns col-md-6 portfolio-item ${item.category}`}
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
