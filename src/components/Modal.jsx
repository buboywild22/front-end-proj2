import React from 'react';
import Form from '../Validation/Form'
const Modal = () => {
    return (
        <>
        <div
          className="modal fade"
          id="signin"
          tabIndex={-1}
          aria-labelledby="signinmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border border-danger border-end-0 border-start-0 border-top-0 border-2">
                <h1 className="modal-title" id="signinmodal">
                  Sign In
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <Form/>
                  
                  {/* <button className="btn btn-lg d-grid col-12 bg-danger text-white">
                    Sign In
                  </button> */}
                  {/* <a className='btn btn-lg d-grid col-12 bg-danger text-white' href="/client">Sign In</a> */}
                  <div className="container d-flex mx-auto">
                    <hr className="or ms-4" />
                    <span>&nbsp; or &nbsp;</span>
                    <hr className="or" />
                  </div>
                  <div className="col-12 d-grid">
                    <a
                      className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                      href="#"
                    >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAACs0lEQVRIie2Vz08TQRTHv2+3VAoJIJxKIFC5APGoJCgXEw9erIkXuJLwI+CFv8CA3jiUmGggsQmBxCgmxtjEux48GU1IxIpYfge40FKplN3uzPOwULbbXdoKHkz8nnbmzft+3pud3QH+y0mhDR+mV8r/JJWKWjW53ax4uIfAQQBtAGqOIgkAUWZEpEIv0Fe/djbgzGadqtEoiAYBLivgpRMwZWSMUQw3JUoGesM7lwWLCIBAAZBNvKyyGtQH/AtFA73hnctCig8gVJUGy9omVabrTtB84MxmnarTRxTorKXKg1sNF+CvVJHSJdZSAs9jaat1TJDoQF9j3JrnsRupOo0Vgt1rr0SosxqqpdzFpGEDcosHdN8ARqy5So7T050AgP7TYK01njyYm5hpCOGtJutcTocKyR4wvKeZ3G32ZWGpDKP3fQLzuxlkpONyrwLulsB4lmGNEvPtQlVfqlKzz69W0ni9eojlfYGNX8JxPTGC1rFiC7cXAvose7nuArGpzRkY2vABXF2Mw7GYi1pWa3qbOil3eqVcNbxpp4z+1gpMdtU4hbJ6t63h5ttdx7qER69Ab+AQsHZoTuwVVbODvu0ZbqH4MSwXaOqrU4YmgIQmkdAkdHmyj4eCs/Nf4i5AQtQ6zPksmBEhwjV7zuzSAWaXDgAAz25cRHeL+UrG51N48HnfrTPTE3hjHed0KIUyB0A/1aE0aVLQS1cghvyrBEydF42InmCwft0dCMAgOQZQ7Bx4PwxVe2ifzAOirzGuMt0BKHkG2J4ABdEbyDv1+UAA+oB/QbDsIGCxdBbFVFa60F8fdYo6AgEAAw3fjYzRScSPUNxB0ohpQni0K263PeBwH+ZouClhACMIb00o4O6jH/FVwLxRyhRKg/CJGREpac5+QM5NoYVk7ePoz7q/Yv7P6zcaBP1fpdTfRwAAAABJRU5ErkJggg==" />{" "}
                      Sign in Using Facebook
                    </a>
                  </div>
                  <div className="col-12 d-grid">
                    <a
                      className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                      href="#"
                    >
                      <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                      Sign in Using Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* modal signin end here */}
        {/* modal signup starts here */}
        <div
          className="modal fade"
          id="signup"
          tabIndex={-1}
          aria-labelledby="sigupnmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border border-danger border-end-0 border-start-0 border-top-0 border-2">
                <h1 className="modal-title" id="signupmodal">
                  Sign Up
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form action="https://formspree.io/f/xjvzkrpz" method="POST">
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label " htmlFor="email">
                      Email/User name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email Address or Username"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      id="password"
                      required=""
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      name="phone"
                      id="phone"
                      required=""
                    />
                  </div>
                  <div className="ps-1">
                    <p>
                      Already have an account?{" "}
                      <a href="#" data-bs-toggle="modal" data-bs-target="#signin">
                        sign in here
                      </a>
                    </p>
                  </div>
                  {/* <button className="btn btn-lg d-grid col-12 bg-danger text-white">
                    Sign Up
                  </button> */}
                  <a className='btn btn-lg d-grid col-12 bg-danger text-white'data-bs-toggle="modal"
                  data-bs-target="#signin" href="/">Sign Up</a>
                  <div className="container d-flex mx-auto">
                    <hr className="or ms-4" />
                    <span>&nbsp; or &nbsp;</span>
                    <hr className="or" />
                  </div>
                  <div className="col-12 d-grid">
                    <a
                      className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                      href="#"
                    >
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAACs0lEQVRIie2Vz08TQRTHv2+3VAoJIJxKIFC5APGoJCgXEw9erIkXuJLwI+CFv8CA3jiUmGggsQmBxCgmxtjEux48GU1IxIpYfge40FKplN3uzPOwULbbXdoKHkz8nnbmzft+3pud3QH+y0mhDR+mV8r/JJWKWjW53ax4uIfAQQBtAGqOIgkAUWZEpEIv0Fe/djbgzGadqtEoiAYBLivgpRMwZWSMUQw3JUoGesM7lwWLCIBAAZBNvKyyGtQH/AtFA73hnctCig8gVJUGy9omVabrTtB84MxmnarTRxTorKXKg1sNF+CvVJHSJdZSAs9jaat1TJDoQF9j3JrnsRupOo0Vgt1rr0SosxqqpdzFpGEDcosHdN8ARqy5So7T050AgP7TYK01njyYm5hpCOGtJutcTocKyR4wvKeZ3G32ZWGpDKP3fQLzuxlkpONyrwLulsB4lmGNEvPtQlVfqlKzz69W0ni9eojlfYGNX8JxPTGC1rFiC7cXAvose7nuArGpzRkY2vABXF2Mw7GYi1pWa3qbOil3eqVcNbxpp4z+1gpMdtU4hbJ6t63h5ttdx7qER69Ab+AQsHZoTuwVVbODvu0ZbqH4MSwXaOqrU4YmgIQmkdAkdHmyj4eCs/Nf4i5AQtQ6zPksmBEhwjV7zuzSAWaXDgAAz25cRHeL+UrG51N48HnfrTPTE3hjHed0KIUyB0A/1aE0aVLQS1cghvyrBEydF42InmCwft0dCMAgOQZQ7Bx4PwxVe2ifzAOirzGuMt0BKHkG2J4ABdEbyDv1+UAA+oB/QbDsIGCxdBbFVFa60F8fdYo6AgEAAw3fjYzRScSPUNxB0ohpQni0K263PeBwH+ZouClhACMIb00o4O6jH/FVwLxRyhRKg/CJGREpac5+QM5NoYVk7ePoz7q/Yv7P6zcaBP1fpdTfRwAAAABJRU5ErkJggg==" />{" "}
                      Signup Using Facebook
                    </a>
                  </div>
                  <div className="col-12 d-grid">
                    <a
                      className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                      href="#"
                    >
                      <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                      Signup Using Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* modal signup end here */}
      </>
    )
};

export default Modal;