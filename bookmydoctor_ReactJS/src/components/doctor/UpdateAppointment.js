import React, { useState, useEffect } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
const axios = require('axios').default;
export default function UpdateAppointment(props) {

  const [appointment, setAppointment] = useState(props.appointment);
  const [message, setMessage] = useState("");
  const handleInput = (e) => {

    var { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    })
  }
  useEffect(() => {
    axios.put('http://localhost:8080/updateappointment', appointment


    ).then((response) => {
      setMessage(response.data.message);
    });
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "Appointment Updated succesfully") {

      alert("Updated Successfully");


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
              <h4 className="fontColor"><b>Update Appointment</b></h4>
              <hr />
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label><b>Appointment ID</b></label><br />
                  <input type="text" className="col-sm-8"
                    id="appointmentId"
                    name="appointmentId"
                    value={appointment.appointmentId}
                    placeholder="Appointment ID"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label><b>Doctor Name</b></label><br />
                  <input type="text" className="col-sm-8" id="doctorName"
                    name="doctorName"
                    value={appointment.doctor.doctorName}

                    placeholder="Doctor Name"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label><b>Patient ID</b></label><br />
                  <input type="text" className="col-sm-8" id="patientId"
                    name="patientId"
                    value={appointment.patient.patientId}
                    placeholder="Patient ID"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label><b>Patient Name</b></label><br />
                  <input type="text" className="col-sm-8" id="patientName"
                    name="patientName"
                    value={appointment.patient.patientName}
                    placeholder="Patient Name"
                    disabled
                  />
                </div>


                <div class="form-group">
                  <label><b>Appointment date</b></label><br />
                  <input type="date" name="appointmentDate" className="col-sm-8"
                    value={appointment.appointmentDate}
                    onChange={handleInput}
                    required />

                </div>
                <div class="button">

                  <button type="submit" className="btn btn-block buttonFont col-sm-8" style={{ backgroundColor: "mediumvioletred" }}>Update</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
