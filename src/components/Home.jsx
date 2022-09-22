import React from 'react';
import Allusers2 from './Content';
// import Navbar from './NavBar';
import Footer from './Footer';
import Navb2 from './Navb2'
import img1 from './image/img1.png';
import img2 from './image/img2.png';
import img3 from './image/img3.png';
import img4 from './image/img4.png';
import img5 from './image/img5.png';
import B4footer2 from './B4footer2';
import Swal from 'sweetalert2';
import Modal from './Modal';
const Home = () => {
    return (
        <div className='container-fluid'>
            <Navb2/><Modal/>
            <div className="container-fluid pt-2">
            <div className="container-fluid d-lg-flex d-sm-block d-sm-grid">
                <div className="col-8 container-fluid d-inline">
                <div
                    id="carouselExampleInterval"
                    className="carousel slide carousel-dark"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={img1} style={{height:600}} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src={img2} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100 h-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="d-block w-100 h-100" alt="..." />
                    </div>
                    </div>
                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                    >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                    >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
                <div className="border border-dark border-opacity-25 container-fluid">
                <div className=" container mt-1">
                    <h1 className="text-center">
                    Welcome to <span className="erp text-danger">rentAplays</span>
                    </h1>
                    <p className="text-center">
                    Your kids happiness and security is our priority
                    </p>
                    <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
                    reiciendis tempore doloribus ipsa!
                    </p>
                </div>
                <div className="mx-auto container-fluid col-sm-12">
                    <h5 className="ps-1">
                    Have any suggestion for better user experience? feel free to message
                    us.
                    </h5>
                    <form method="POST">
                    <div className="mb-2">
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        />
                    </div>
                    <div className="mb-2">
                        <textarea
                        className="form-control"
                        id="message"
                        rows={2}
                        placeholder="Message"
                        defaultValue={""}
                        />
                    </div>
                    {/* your other form fields go here */}
                    <div className="d-flex justify-content-end mb-1">
                        <a
                        onClick={submit}
                        type="button"
                        className="btn btn-outline-danger"
                        // href="/"
                        >
                        Submit
                        </a>
                        
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        <hr/>
        <Allusers2/>
        <B4footer2/>
        <Footer/>
        </div>
    );
}

function submit()
          {   Swal.fire({
              icon: 'success',
              title: 'Message sent!',
              confirmButtonColor: "#CE2033",
              allowOutsideClick: false,
              text: 'Thank you for your suggestion!',
            }).then(function() {
                window.location = "/";
                })

            }


export default Home;
