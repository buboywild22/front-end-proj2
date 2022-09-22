import React from 'react';
// import { Link } from 'react-router-dom';
import signin from './image/signin.png'
const ClientNavb = () => {
    return (
    <nav className="navbar navbar-light bg-light container-fluid sticky-top ">
        <div className="container-fluid bg-white border border-dark border-opacity-25 border-start-0 border-end-0 border-top-0">
  <header className="container-fluid">
    <nav className="navbar navbar-expand-sm bg-white navbar-dark navb">
      <div className="container-fluid">
        <a href="/client" className="btn border-0">
          <img
            className="navbar-brand icon d-sm-inline"
            src="data:image/png;base64,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"
          />
          <span>
            <h1 className="d-none d-lg-none d-xl-inline text-danger erp">
              rentAplays
            </h1>
          </span>
        </a>
        <div className="d-sm-inline border place border-dark bilog">
          <nav className="navbar navbar-expand-lg d-sm-inline">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse ge"
                id="navbarSupportedContent"
              >
                <a className="btn border-0" href="#">
                  <h5>Home</h5>
                </a>
                <a className="btn border-0" href="/client#playground">
                  <h5>Playgrounds</h5>
                </a>
                <a className="btn border-0" href="/client#about">
                  <h5>About Us</h5>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="d-sm-inline border-dark dropdown me-5">
          <button
            className="dropdown border border-0 bg-white d-sm-inline"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="rounded-pill border border-secondary border border-opacity-50"
              src={signin}
              alt=""
            />
          </button>
          <ul className="dropdown-menu">
            <li>
              {/* <button
                type="button"
                className="btn dropdown-item "
                data-bs-toggle="modal"
                data-bs-target="#signin"
              >
                <h4>Sign In</h4>
              </button> */}
              <a className="dropdown-item disabled">
                <p className="text-sm-start">Account</p>
              </a>
            </li>
            <li>
              {/* <button
                type="button"
                className="btn dropdown-item disabled"
                data-bs-toggle="modal"
                data-bs-target="#signup"
              >
                Sign Up
              </button> */}
              <a className="dropdown-item disabled">
                <p className="text-sm-start">Settings</p>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item disabled">
                <p className="text-sm-start">Other function here</p>
              </a>
            </li>
            <li>
            <a className="dropdown-item" href='/'>
                <p className="text-sm-start">Log Out</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

    </nav>
    );
}

export default ClientNavb;
