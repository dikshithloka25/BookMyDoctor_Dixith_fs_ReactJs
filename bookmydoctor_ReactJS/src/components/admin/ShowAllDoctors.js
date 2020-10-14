import React, { useState, useEffect } from 'react'

const axios = require('axios').default;
export default function ShowAllDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const [message , setMessage] = useState("");
    useEffect(() => {

        axios.get('http://localhost:8080/getalldoctors').then((response) => {
            setDoctors(response.data.list)
        });

        if (deleteDoctor != null) {
            axios.delete('http://localhost:8080/deletedoctor', {
                params: {
                    doctorId: deleteDoctor.doctorId
                }
            }
            ).then((response) => {
             setMessage(response.data.message)
            });
        }

    },[deleteDoctor])
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Doctor ID</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Location</th>
                        <th scope="col">Hospital Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                                <tr key={doctor.id}>
                                    <th scope="row">{doctor.doctorId}</th>

                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.location}</td>
                                    <td>{doctor.hospitalName}</td>
                                    <td>{doctor.mobileNo}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.password}</td>
                                    <td><a className="btn text-danger" >
                                        <i className="fas fa-trash-alt" onClick={() => { setDeleteDoctor(doctor) }}></i>
                                    </a></td>
                                </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );


}

