import React, { useState, useEffect } from 'react';
//import AddAppointment from './AddAppointment';
import "./DoctorList.css"

import { FaStar, FaBookMedical } from "react-icons/fa";
import { FcRating, FcVoicePresentation } from "react-icons/fc";
import ViewFeedbacks from './ViewFeedbacks';
import { BrowserRouter as useHistory, Redirect } from 'react-router-dom'
import AddAppointment from './AddAppointment';
import AddRating from './AddRating';

const axios = require('axios').default;
export default function DoctorList(props) {
    const [doctor, setDoctor] = useState(null);
    
    const [patient, setPatient] = useState({})
    const [rating, setRating] = useState(null)
    const doctors = props.doctors;
    const patientId = props.patientId;

    useEffect(() => {
        axios.get('http://localhost:8080/getpatient', {
            params: {
                patientId: patientId
            }
        }
        ).then((response) => {
            setPatient(response.data.bean);
        });



    }, [patientId])

if(rating!=null){
    return <AddRating patient = {patient} doctor= {rating}/>
}
   
    if (doctor != null) {
        return <AddAppointment patient={patient} doctor={doctor} />
    }
   
    return (

        <div>
            <table className="table table-striped">
                <thead className="thead" style={{ background: " rgb(189, 20, 127)" }}>
                    <tr>
                       
                        <th scope="col" className="buttonFont">Doctor Name</th>
                        <th scope="col" className="buttonFont">Speciality</th>
                        <th scope="col" className="buttonFont">Location</th>
                        <th scope="col" className="buttonFont">Hospital Name</th>
                        <th scope="col" className="buttonFont">Mobile Number</th>
                        <th scope="col" className="buttonFont">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        doctors.map(
                            doctor =>
                                <tr key={doctor.id}>
                                  
                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.location}</td>
                                    <td>{doctor.hospitalName}</td>
                                    <td>{doctor.mobileNo}</td>
                                    <td>
                                        <a className="btn text-primary " onClick={() => { setDoctor(doctor) }}>
                                        <h4 data-tooltip-one="Book Appointment"><FaBookMedical/></h4>
                                        </a>
                                        <a className="btn" data-toggle="modal" data-target="#addrating"  >
                                        <h4 data-tooltip-two="View Ratings"><FcVoicePresentation/></h4>
                                        </a>
                                        <div class="modal fade" id="addrating" tabindex="-1" aria-labelledby="updateDoctorModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content rating">
                                                    <div class="modal-body" id="updateModal">
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        <ViewFeedbacks doctor={doctor} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn text-primary" onClick={()=>{setRating(doctor)}}>
                                        <h4 data-tooltip-three="Add Rating"><FcRating /></h4>
                                        </a>


                                    </td>

                                </tr>
                        )
                    }

                </tbody>
            </table>


        </div>

    )
}

