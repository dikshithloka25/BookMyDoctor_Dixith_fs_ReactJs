import React, { useEffect, useState } from 'react'
const axios = require('axios').default;
export default function ShowAllAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [deleteAppointment , setDeleteAppointment] = useState(null);
    useEffect(() => {

        axios.get('http://localhost:8080/getallappointments').then((response) => {
            setAppointments(response.data.list)
        });

        if(deleteAppointment != null){
            axios.delete('http://localhost:8080/deleteappointment', {
                            params: {
                                 appointmentId: deleteAppointment.appointmentId
                             }
                         }
                         ).then((response) => {
                            
                         });
        }
    })

    return (
        <div>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Appointment ID</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Doctor ID</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Location</th>
                        <th scope="col">Hospital Name</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        appointments.map(
                            appointment =>
                                <tr key={appointment.id}>
                                    <th scope="row"> {appointment.appointmentId}</th>


                                    <td>{appointment.appointmentDate}</td>
                                    <td>{appointment.patient.patientId}</td>
                                    <td>{appointment.patient.patientName}</td>
                                    <td>{appointment.doctor.doctorId}</td>
                                    <td>{appointment.doctor.doctorName}</td>
                                    <td>{appointment.doctor.speciality}</td>
                                    <td>{appointment.doctor.location}</td>
                                    <td>{appointment.doctor.hospitalName}</td>
                                    <td><a className="btn text-danger" >
                                <i className="fas fa-trash-alt" onClick={()=>{setDeleteAppointment(appointment)}}></i>
                            </a></td>
                                </tr>

                        )
                    }


                </tbody>
            </table>
        </div>
    )
}
