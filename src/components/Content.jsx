import React, {useEffect, useState} from 'react';
import { getAllUsers, deleteUser } from '../service/api';
const Allusers2 = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () =>{
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data); 
    }

    return (
        <div className='container-fluid' id="playground">

        <div className="container-fluid" >
        <div className="row">
            {
                user.map((data) =>(
                <div className="col-md-4">

                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="container-fluid p-2">
                                <div className="card container-fluid">
                                <div id="content1" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                        <div className="carousel-item active">
                                        <img style={{ width: 600, height:300}} src={data.photo} alt="logo"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img style={{ width: '100%', height:300}} src={data.photo2} alt="logo"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img style={{ width: '100%', height:300}} src={data.photo3} alt="logo"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img style={{ width: '100%', height:300}} src={data.photo4} alt="logo"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img style={{ width: '100%', height:300}} src={data.photo5} alt="logo"/>
                                        </div>
                                    </div>
                                    {/* <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#content1"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#content1"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button> */}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text opacity-50">
                                        {data.details}
                                        </p>
                                        <p className='opacity-50'>{data.kms} <br/> {data.date}</p>
                                        <p className='text-danger'>{data.price}</p>
                                        <a
                                            data-bs-toggle="modal"
                                            data-bs-target="#signin"
                                            className="btn btn-outline-danger"
                                        >
                                            Book Now
                                        </a>
                                </div>
                                </div>
                        </div>
                    </div>
 
                </div>
            </div>
            ))
            }
            <hr />
        </div>
    </div>
    </div>
    
    );
}
export default Allusers2;
