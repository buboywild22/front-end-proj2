import React from 'react';
import Swal from 'sweetalert2';
import Book from '../Validation/BookNow';
const ClientModal = () => {
    return (
<div
          className="modal fade"
          id="signin"
          tabIndex={-1}
          aria-labelledby="sigupnmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border border-danger border-end-0 border-start-0 border-top-0 border-2">
                <h1 className="modal-title" id="signupmodal">
                  Client Info
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
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label " htmlFor="email">
                      Email/User name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address or Username"
                      name="email"
                      id="email"
                     
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="fname">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      name="fname"
                      id="fname"
                      required=""
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="lname">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Middle Name"
                      name="mname"
                      id="mname"
                      required=""
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="lname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      name="lname"
                      id="lname"
                      required=""
                    />
                  </div>
                  <div className="form-check d-grid mb-3 me-2">
                    <label className="form-check-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      name="phone"
                      id="phone"
                      required=""
                    />
                  </div>
                  {/* <button className="btn btn-lg d-grid col-12 bg-danger text-white">
                    Sign Up
                  </button> */}
                  <a className='btn btn-lg d-grid col-12 bg-danger text-white' data-bs-dismiss="modal"
                  aria-label="Close" onClick={submit} >Book Now</a>
                </form>
              </div>
            </div>
          </div>
        </div>
     )
    };
    function submit()
          {   Swal.fire({
              icon: 'success',
              title: 'Playground Booked!',
              confirmButtonColor: "#CE2033",
              allowOutsideClick: false,
              text: 'Thanks for trusting us!',
            // }).then(function() {
            //     window.location = "/client";
                })

            }
    export default ClientModal;