import React, { useState,useEffect } from 'react'

const axios = require('axios').default;
export default function AddRating(props) {
const feedback = {
    patientInfo:props.patient,
    doctorInfo:props.doctor,
    rating:"",
    patientName:props.patient.patientName,
    doctorName:props.doctor.doctorName
}

const [rating , setRating] = useState(feedback);
const [message,setMessage] = useState("");
const [description , setDescription] = useState("");

const handleInput = (e) => {
    var { name, value } = e.target;
    setRating({
      ...rating,
      [name]: value
    })
  }
  useEffect(() => {
    axios.post('http://localhost:8080/addfeedback', rating).then((response) => {
      setMessage(response.data.message);
      setDescription(response.data.description);
    })
  },[rating])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "FeedBack Added succesfully") {
      alert(message);
    } else {
      alert(message + description);
    }
  }

    return (
        <div class="col-md-6 card" id="card-card">
        <div class="card-body">

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <h5 class="header-color"><b>Give Your Feedback...</b></h5>
                </div>
                <div class="form-group">
                    <label><b>Patient Name</b></label>
                    <input type="text" class="form-control" id="patientName"
                        pattern="^[a-zA-Z]{4,15}"
                        title="Only alphabets allowed 4 - 15 letters"
                        name="patientName"
                        value={props.patient.patientName}
                        disabled />
                </div>
                <div class="form-group">
                    <label><b>Doctor Name</b></label>
                    <input type="text" class="form-control" id="doctorName"
                        pattern="^[a-zA-Z]{4,15}"
                        title="Only alphabets allowed 4 - 15 letters"
                        name="doctorName"
                        value={props.doctor.doctorName}
                        disabled />
                </div>
                <div class="form-group">
                    <label ><b>Rating</b></label>
                    <input type="number" class="form-control" id="rating"
                       
                        name="rating"
                        onChange={handleInput}
                        required />
                </div>
                <div class="button">

                    <button type="submit" class="btn buttonFont btn-block" style={{ backgroundColor: "mediumvioletred" }}>Add</button>

                </div>
            </form>
        </div>
    </div>
    )
}
