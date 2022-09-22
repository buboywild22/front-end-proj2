import React from 'react';
import B4footer from './B4footer';
import tm1 from './image/tm1.jpeg'
import tm2 from './image/tm2.jpeg'
import tm3 from './image/tm3.jpeg'

const B4footer2 = () => {
    return (
        <div className='container-fluid '>
            <B4footer/>
        <div className="container-fluid border pb-1 border-dark border-opacity-25 border-end-0">

        <div className="container-fluid d-lg-flex d-sm-block d-sm-grid">
            <div className="col-5 container-fluid d-inline">
            <div>
                <h1 className="text-center text-dark erp"> Page Info</h1>
                <h1 className="erp text-danger">rentAplays</h1>
                <p className="fs-5 text-opacity-25">
                rentaplays is website where you can book some private playgrounds to
                be sure that your kids are away from virus, our team is making sure
                that all our facilities after a session.
                </p>
                <p className="fs-5 text-opacity-25">
                and also away from getting chance of your kids being kidnap all our
                facilities is monitored by cctv 24/7
                </p>
            </div>
            </div>
            <div className="border border-dark border-opacity-25 container-fluid">
            <h1 className="text-dark text-center erp">Feedbacks</h1>
            <div
                id="carouselExampleCaptions1"
                className="carousel slide carousel-dark"
                data-bs-ride="false"
            >
                <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
                </div>
                <div className="carousel-inner">
                {/* testimony 1st starts here */}
                <div className="carousel-item w-100 active">
                    <div className="card border-0  w-100">
                    <img
                        src={tm1}
                        className="rounded-circle mx-auto  ipre border border-dark"
                        alt="..."
                    />
                    <div className="card-body text-dark text-opacity-75 ps-5 pe-5">
                        <h5 className="card-title ps-4 erp text-danger">
                        Joven Dimitri{" "}
                        <span className="text-dark fs-6">
                            <p>Parent</p>
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
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="prev"
                    >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
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
                    <img
                    src={tm2}
                        className="rounded-circle mx-auto ipre border border-danger"
                        alt="..."
                    />
                    <div className="card-body container-fluid text-dark text-opacity-75 ps-5 pe-5">
                        <h5 className="card-title text-danger erp ps-4">
                        Benedict Satoshi{" "}
                        <span>
                            <p className="text-dark fs-6">Parent</p>
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
                    data-bs-target="#carouselExampleCaptions1"
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
                    data-bs-target="#carouselExampleCaptions1"
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
                {/* testimony 3rd starts here */}
                <div className="carousel-item w-100">
                    <div className="card border-0 w-100">
                    <img
                        src={tm3}
                        className="rounded-circle mx-auto ipre border border-danger"
                        alt="..."
                    />
                    <div className="card-body text-dark text-opacity-75 ps-5 pe-5">
                        <h5 className="card-title ps-4 text-danger erp">
                        Hercules John{" "}
                        <span>
                            <p className="text-dark fs-6">Parent</p>
                        </span>
                        </h5>
                        <p className="card-text ps-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti, laboriosam!
                        </p>
                        <br />
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
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
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="next"
                    >
                    <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    );
    
}

export default B4footer2;
