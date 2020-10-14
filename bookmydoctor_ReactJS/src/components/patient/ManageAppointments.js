import React, { useState, useEffect } from 'react'
// import UpdateAppointment from './UpdateAppointment'

const axios = require('axios').default;
export default function ManageAppointments({ match }) {

   

    const patientId = match.params.patientId;
    const [appointments, setAppointments] = useState([]);

const [deleteAppointment , setDeleteAppointment] = useState(null);
// const [updateAppointment , setUpdateAppointment] = useState(null);

    useEffect(() => {

        axios.get('http://localhost:8080/getallappointmentsofpatient', {
            params: {
                patientId: patientId
            }
        }
        ).then((response) => {
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
    }, [patientId,deleteAppointment])




    // if (updateAppointment!=null) {
    //     return <UpdateAppointment appointment = {updateAppointment} />
    // }

    return (
        <div>
            <table className="table table-striped">
                <thead className="thead" style={{ background: " rgb(189, 20, 127)" }}>
                    <tr>
                       
                        <th scope="col" className="buttonFont">Doctor Name</th>
                        <th scope="col" className="buttonFont">Speciality</th>
                        <th scope="col" className="buttonFont">Hospital Name</th>
                        <th scope="col" className="buttonFont">Appointment Date</th>
                        <th scope="col" className="buttonFont">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, id) =>
                            < tr >
                                
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.speciality}</td>

                                <td>{appointment.hospitalName}</td>
                                <td>{appointment.appointmentDate}</td>
                                <td>
                                    {/* <a className="btn text-primary" onClick={() => { setUpdateAppointment(appointment) }}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </a> */}
                                    <a className="btn text-danger" >
                                        <i className="fas fa-trash-alt" onClick={()=>setDeleteAppointment(appointment)}></i>
                                    </a>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div >

    )


}