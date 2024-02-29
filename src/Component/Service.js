import React from "react";

const Services = () => {
  return (
    <div>
  <div className="container-xxl position-relative p-0">
    {/*  */}
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-12 text-center">
            <h1 className="text-white animated zoomIn">Service</h1>
            <hr className="bg-white mx-auto mt-0" style={{width: 90}} />
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
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
      <div className="modal-content" style={{background: 'rgba(29, 29, 39, 0.7)'}}>
        <div className="modal-header border-0">
          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{maxWidth: 600}}>
            <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
            <button className="btn btn-light px-4"><i className="bi bi-search" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container px-lg-5">
      <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
        <h2 className="mt-2">What Solutions We Provide</h2>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">SEO Optimization</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">Web Design</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">Social Media Marketing</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">Email Marketing</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">PPC Advertising</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">
            <div className="service-icon flex-shrink-0">
              <i className="fa fa-home fa-2x" />
            </div>
            <h5 className="mb-3">App Development</h5>
            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
            <a className="btn px-3 mt-auto mx-auto" href>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
  );
};

export default Services;
