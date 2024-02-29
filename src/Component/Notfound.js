import React from 'react'

const Notfound = () => {
  return (
<div>
  <div className="container-xxl position-relative p-0">

    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-12 text-center">
            <h1 className="text-white animated zoomIn">Not Found</h1>
            <hr className="bg-white mx-auto mt-0" style={{width: 90}} />
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">404</li>
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
  {/* 404 Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container px-lg-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-primary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
          <a className="btn btn-primary rounded-pill py-3 px-5" href>Go Back To Home</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Notfound