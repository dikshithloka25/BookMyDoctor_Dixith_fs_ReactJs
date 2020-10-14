import React, { useState, useEffect } from 'react'
import "./DoctorProfile.css"
import UpdateDoctor from './UpdateDoctor'
const axios = require('axios').default;
export default function DoctorProfile({ match }) {

    var [update, setUpdate] = useState(false);
    var [doctor, setDoctor] = useState({});


    const doctorId = match.params.doctorId;
    useEffect(() => {
        axios.get('http://localhost:8080/getdoctor', {
            params: {
                doctorId: doctorId
            }
        }
        ).then((response) => {
            setDoctor(response.data.bean)
        });
    }, [doctorId])


    if (update) {
        return <UpdateDoctor doctor={doctor} />;
    }
    return (

        <div >
            <h4 className="fontColor ml-5"><b>Profile</b></h4>
            <a className="btn text-primary float-top ml-5" onClick={() => { setUpdate(true) }}  >
                <i className="fas fa-pencil-alt"></i>
            </a>
            <div class="container">
                <div class="col-md-6">
                    <div className="card doctorProfile border-top mt-3 ">
                        <form className="ml-3 mt-4" action="">

                            <div class="form-group">
                                <label><b>Doctor ID</b></label><br />
                                <input type="text" value={doctor.doctorId}
                                    className="col-sm-8"
                                    id="doctorId" disabled />
                            </div>
                            <hr />
                            <div class="form-group">
                                <label><b>Full Name</b></label><br />
                                <input type="text" placeholder="name"
                                    className="col-sm-8"
                                    value={doctor.doctorName}
                                    id="doctorName" disabled />
                            </div>


                            <div class="form-group ">
                                <label><b>Speciality</b></label><br />
                                <input type="text" placeholder="speciality"
                                    className="col-sm-8"
                                    value={doctor.speciality}
                                    id="speciality" disabled />
                            </div>
                            <div class="form-group ">
                                <label className="ml-3"><b>Location</b></label><br />
                                <input type="text" placeholder="location"
                                    value={doctor.location}
                                    className="col-sm-8"
                                    id="location" disabled />
                            </div>


                            <div class="form-group ">
                                <label><b>Hospital Name</b></label><br />
                                <input type="text" placeholder="hospital name"
                                    value={doctor.hospitalName}
                                    className="col-sm-8"
                                    id="hospitalName" disabled />
                            </div>
                            <div class="form-group">
                                <label className="ml-3"><b>Mobile Number*</b></label><br />
                                <input type="number" placeholder="mobile number"
                                    value={doctor.mobileNo}
                                    className="col-sm-8"
                                    id="mobileNo" disabled />

                            </div>

                            <div class="form-group">
                                <label><b>Email address*</b></label><br />
                                <input type="email" placeholder="email"
                                    className="col-sm-8"
                                    value={doctor.email}
                                    id="email" aria-describedby="emailHelp" disabled />

                            </div>
                            <div class="form-group">
                                <label><b>Password*</b></label><br />
                                <input type="password" placeholder="password"
                                    value={doctor.password} id="password"
                                    className="col-sm-8"

                                    disabled />
                            </div>
                        </form>


                    </div>

                </div>

            </div>

        </div>
    )
}
