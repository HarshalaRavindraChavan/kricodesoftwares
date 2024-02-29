import React from 'react'

const Project = () => {
  return (
    <div>
  <div className="container-xxl position-relative p-0">
  
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-12 text-center">
            <h1 className="text-white animated zoomIn">Project</h1>
            <hr className="bg-white mx-auto mt-0" style={{width: 90}} />
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
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
  {/* Portfolio Start */}
  <div className="container-xxl py-5">
    <div className="container px-lg-5">
      <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="position-relative d-inline text-primary ps-4">Our Projects</h6>
        <h2 className="mt-2">Recently Launched Projects</h2>
      </div>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <li className="btn px-3 pe-4 active" data-filter="*">All</li>
            <li className="btn px-3 pe-4" data-filter=".first">Design</li>
            <li className="btn px-3 pe-4" data-filter=".second">Development</li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
          <div className="position-relative rounded overflow-hidden">
            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt />
            <div className="portfolio-overlay">
              <a className="btn btn-light" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary" /></a>
              <div className="mt-auto">
                <small className="text-white"><i className="fa fa-folder me-2" />Web Design</small>
                <a className="h5 d-block text-white mt-1 mb-0" href>Project Name</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Project