import React, { useState, useEffect } from "react";
const axios = require('axios').default;
export default function ShowAllPatients() {

    const [patients, setPatients] = useState([]);
    const [deletePatient, setDeletePatient] = useState(null);

    useEffect(() => {

        axios.get('http://localhost:8080/getallpatients').then((response) => {
            setPatients(response.data.list)
        });

        if (deletePatient != null) {
            axios.delete('http://localhost:8080/deletepatient', {
                params: {
                    patientId: deletePatient.patientId
                }
            }
            ).then((response) => {

            });
        }

    },[deletePatient])
    return (
        <div>
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
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map(
                            patient =>
                                <tr key={patient.id}>
                                    <th scope="row"> {patient.patientId}</th>

                                    <td>{patient.patientName}</td>
                                    <td>{patient.mobileNo}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.password}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.age}</td>
                                    <td><a className="btn text-danger" >
                                        <i className="fas fa-trash-alt" onClick={() => { setDeletePatient(patient) }}></i>
                                    </a></td>
                                </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );

}



