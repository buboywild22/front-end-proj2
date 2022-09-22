import React from 'react';
import cl1 from './image/cl1.jpg'
import cl2 from './image/cl2.jpg'
const B4footer = () => {
    return (
            <div className="border border-dark border-opacity-25 container-fluid" id="about">
            <h1 className="text-dark text-center erp">About</h1>
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-dark"
                data-bs-ride="false"
            >
                <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                
                </div>
                <div className="carousel-inner">
                {/* testimony 1st starts here */}
                <div className="carousel-item w-100 active">
                    <div className="card border-0  w-100">
                    <img style={{height:810}} className="d-block w-100" src={cl1} alt="logo"/>
                    <div className="card-body text-dark text-opacity-75 ps-5 pe-5">
                        <h5 className="card-title ps-4 erp text-danger">
                        Jovit Tambolero{" "}
                        <span className="text-dark fs-6">
                            <p>Cleaning Team</p>
                        </span>
                        </h5>
                        <p className="card-text ps-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem, quidem.
                        </p>
                        <br />
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                    >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                    >
                    <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* testimony 1st end here */}
                {/* testimony 2nd starts here */}
                <div className="carousel-item w-100">
                    <div className="card border-0 w-100">
                    <img style={{height:810}} className="d-block w-100" src={cl2} alt="logo"/>
                    <div className="card-body container-fluid text-dark text-opacity-75 ps-5 pe-5">
                        <h5 className="card-title text-danger erp ps-4">
                        Bertong Labra{" "}
                        <span>
                            <p className="text-dark fs-6">CCTV Operator</p>
                        </span>
                        </h5>
                        <p className="card-text ps-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                        excepturi.
                        </p>
                        <br />
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                    >
                    <span
                        className="carousel-control-prev-icon "
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                    >
                    <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* testimony 2nd end here */}
                </div>
        </div>
        </div>

    );
}

export default B4footer;
