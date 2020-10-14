import React, { useState } from "react";

const axios = require('axios').default;
export default function ShowPatient() {
    var [patientId, setPatientId] = useState();
    var [patient, setPatient] = useState({});

    const handleInput = (e) => {
        setPatientId(e.target.value)
    }

    const handleClick = () => {
        axios.get('http://localhost:8080/getpatient', {
            params: {
                patientId: patientId
            }
        }
        ).then((response) => {
            setPatient(response.data.bean);
        });
    }


    if (patient === null) {
        alert("Check the Patient ID entered");
    }
    return (
        <div>
            <div className="card col-md-6 mb-3">


                <div class="form-group">
                    <label className="mt-4"><b>Enter ID to get Patient</b></label>
                    <input type="number" id="patientId" placeholder=" Enter Patient ID"
                        value={patientId}
                        onChange={handleInput}
                        class="form-control"
                        required />
                </div>
                <div class="form-group">
                    <button className="btn buttonFont btn-block "
                        onClick={handleClick}
                        style={{ background: " rgb(28, 171, 228)" }}
                    >Get Patient</button>
                </div>

            </div>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> {patient.patientId}</th>

                        <td>{patient.patientName}</td>
                        <td>{patient.mobileNo}</td>
                        <td>{patient.email}</td>
                        <td>{patient.password}</td>
                        <td>{patient.bloodGroup}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.address}</td>
                        <td>{patient.age}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
