import React, { useState, useEffect, useHistory } from 'react'
import DoctorProfile from './DoctorProfile';

const axios = require('axios').default;
export default function UpdateDoctor(props) {


    var [updateDoctor, setUpdateDoctor] = useState(props.doctor);
    var [message, setMessage] = useState("");
    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdateDoctor({
            ...updateDoctor,
            [name]: value
        })
    }

    useEffect(() => {
        axios.put('http://localhost:8080/editdoctorprofile', updateDoctor


        ).then((response) => {
            setMessage(response.data.message);
        });
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message === "Profile Edited succesfully") {

            alert("Updated Successfully");

            // return <DoctorProfile />;
        } else {
            alert("not Updated");
        }
    }



    return (
        <div>
            <div class="container">
                <div class="col-md-6">
                    <div class="card mt-4">
                        <div class="card-body" >
                            <h4 className="fontColor"><b>Update Doctor</b></h4>
                            <hr />
                            <form className="ml-3 mt-4" onSubmit={handleSubmit}>

                                <div class="form-group">
                                    <label><b>Doctor ID</b></label><br />
                                    <input type="text" value={updateDoctor.doctorId}
                                        className="col-sm-6"
                                        id="doctorId" disabled />
                                </div>
                                <hr />
                                <div class="form-group">
                                    <label><b>Full Name*</b></label><br />
                                    <input type="text" placeholder="name"
                                        name="doctorName"
                                        className="col-sm-6"
                                        pattern="[A-Za-z ]{1,20}"
                                        title="Only Alphabets are allowed"
                                        id="doctorName" required
                                        value={updateDoctor.doctorName}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div class="form-group">
                                    <label><b>Speciality*</b></label><br />
                                    <input type="text" placeholder="speciality"
                                        name="speciality"
                                        className="col-sm-6"
                                        pattern="[A-Za-z ]{1,20}"
                                        value={updateDoctor.speciality}
                                        title="Only Alphabets are allowed"
                                        id="speciality" required
                                        onChange={handleInput}
                                    />
                                </div>
                                <div class="form-group">
                                    <label><b>Location*</b></label><br />
                                    <input type="text" placeholder="location"
                                        name="location"
                                        className="col-sm-6"
                                        pattern="[A-Za-z ]{1,20}"
                                        value={updateDoctor.location}
                                        title="Only Alphabets are allowed"
                                        id="location" required
                                        onChange={handleInput}
                                    />
                                </div>
                                <div class="form-group">
                                    <label><b>Hospital Name</b></label><br />
                                    <input type="text" placeholder="hospital name"
                                        name="hospitalName"
                                        className="col-sm-6"
                                        pattern="[A-Za-z ]{1,20}"
                                        value={updateDoctor.hospitalName}
                                        title="Only Alphabets are allowed"
                                        id="hospitalName" required
                                        onChange={handleInput}
                                    />
                                </div>
                                <div class="form-group">
                                    <label><b>Mobile Number*</b></label><br />
                                    <input type="text" placeholder="mobile number"
                                        name="mobileNo"
                                        className="col-sm-6"
                                        pattern="^[6-9][0-9]{9}"
                                        value={updateDoctor.mobileNo}
                                        title="Only Alphabets are allowed"
                                        id="mobileNo" required
                                        onChange={handleInput}
                                    />

                                </div>
                                <div class="form-group">
                                    <label><b>Email address*</b></label><br />
                                    <input type="email" placeholder="email"
                                        name="email"
                                        className="col-sm-6"
                                        value={updateDoctor.email}
                                        id="email" aria-describedby="emailHelp" required
                                        onChange={handleInput}
                                    />


                                </div>
                                <div class="form-group">
                                    <label><b>Password*</b></label><br />
                                    <input type="password" placeholder="password"
                                        name="password"
                                        className="col-sm-6"
                                        id="password"
                                        value={updateDoctor.password}
                                        pattern="^[A-Za-z]\w{7,14}$"
                                        title="password should contain minimum 8 characters"
                                        required
                                        onChange={handleInput}
                                    />
                                </div>
                                <div >
                                    <button type="submit" className="btn buttonFont btn-block col-sm-6"

                                        style={{ backgroundColor: "mediumvioletred" }}>Update</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
