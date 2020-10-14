
import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
export default function AddAppointment(props) {

  const addAppointment = {
    doctor: props.doctor,
    patient: props.patient,
    appointmentDate: "",
    patientName: props.patient.patientName,
    mobileNo: props.patient.mobileNo,
    doctorName: props.doctor.doctorName,
    speciality: props.doctor.speciality,
    hospitalName: props.doctor.hospitalName
  }

  const [appointment, setAppointment] = useState(addAppointment);

  const [message, setMessage] = useState("");
  var d = new Date();


  const handleInput = (e) => {
    var { name, value } = e.target;
    setAppointment({
      ...appointment,
      [name]: value
    })
  }
  useEffect(() => {
    axios.post('http://localhost:8080/addappointment', appointment).then((response) => {
      setMessage(response.data.message);
    })
  },[appointment])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "Appointment Added succesfully") {
      alert(message);
    } else {
      alert("Not Added");
    }
  }

  return (
    <div class="container">

      <div class="col-md-6">
        <div class="card">
          <div class="card-body" >
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <h5 class="header-color"><b>Book Appointment...</b></h5>
              </div>
              <div class="form-group">
                <label><b>Patient Name</b></label>
                <input type="text" class="form-control" id="patientName" pattern="^[a-zA-Z]+$"
                  title="Only alphabets allowed"
                  name="patientName"
                  value={props.patient.patientName}
                  disabled />
              </div>
              <div class="form-group">

                <label ><b>Mobile Number</b></label>
                <input type="number" class="form-control" id="mobileNo"
                  pattern="^[6-9]{1}[0-9]{9}"
                  title="it contain 10 digits start with 6,7,8,9"
                  value={props.patient.mobileNo}
                  disabled />

              </div>

              <div class="form-group">
                <label><b>Appointment date</b></label><br />
                <input type="date"
                  min="2020-10-01"
                  max="2020-10-31"
                  name="appointmentDate"
                  class="form-control"
                  onChange={handleInput}
                  required />

              </div>
              <div class="button">

                <button class="btn buttonFont btn-block" type="submit" style={{ backgroundColor: "mediumvioletred" }}>Book</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}