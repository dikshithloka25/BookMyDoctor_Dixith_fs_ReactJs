import React, { useState } from 'react'
import './ShowAppointment.css'

const axios = require('axios').default;
export default function ShowAppointment() {

    var [appointmentId, setAppointmentId] = useState();
    var [appointment, setAppointment] = useState({});
    const handleInput = (e) => {
        setAppointmentId(e.target.value)
    }
    const handleClick = () => {
        axios.get('http://localhost:8080/getappointment', {
            params: {
                appointmentId: appointmentId
            }
        }
        ).then((response) => {
            setAppointment(response.data.bean);
        });
    }
    if (appointment === null) {
        alert("Check the Appointment ID entered");
    }
    return (
        <div>
            <div className="card col-md-6 mb-3">


                <div class="form-group">
                    <label className="mt-4"><b>Enter ID to get Appointment</b></label>
                    <input type="number" id="appointmentId" placeholder=" Enter Appointment ID"
                        value={appointmentId}
                        onChange={handleInput}
                        class="form-control"
                        required />
                </div>
                <div class="form-group">
                    <button className="btn buttonFont btn-block "
                        onClick={handleClick}
                        style={{ background: " rgb(28, 171, 228)" }}
                    >Get Appointment</button>
                </div>

            </div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Appointment Date</th>
                       
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient<br /> Mobile Number</th>
                      
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Hospital Name</th>



                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> {appointment.appointmentId}</th>


                        <td>{appointment.appointmentDate}</td>

                        <td>{appointment.patientName}</td>
                        <td>{appointment.mobileNo}</td>

                        <td>{appointment.doctorName}</td>
                        <td>{appointment.speciality}</td>
                        <td>{appointment.hospitalName}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
