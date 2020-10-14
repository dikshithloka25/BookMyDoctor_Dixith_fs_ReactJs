import React, { useState, useEffect } from 'react'
import UpadateProfile from './UpdateProfile'

const axios = require('axios').default;
export default function ViewProfile({ match }) {
  const [profile, ViewProfile] = useState(false);
  var [patient, setPatient] = useState({});


  const patientId = match.params.patientId;
  useEffect(() => {
    axios.get('http://localhost:8080/getpatient', {
      params: {
        patientId: patientId
      }
    }
    ).then((response) => {
      setPatient(response.data.bean)
    });
  }, [patientId])

  if (profile) {
    return <UpadateProfile patient={patient}/>
  }
  return (

    <div class="container">
      <div class="col-md-7">
        <div class="card">
          <div class="card-body" >
            <form>
              <div class="form-group">
                <h4 class="header-color"><b>Profile</b> </h4>
                <a className="btn text-primary" onClick={() => { ViewProfile(true) }}>
                  <i className="fas fa-pencil-alt"></i>
                </a>
                <hr />
              </div>
              <div class="form-group">
                <label><b>Patient ID*</b></label><br />
                <input type="text" value={patient.patientId}
                  className="form-control"
                  id="patientId" disabled />
              </div>
              <div class="form-group">
                <label><b>Full Name*</b></label>
                <input type="text" class="form-control" id="patientName"
                  value={patient.patientName}
                  disabled />
              </div>
              <div class="form-group">

                <label><b>Mobile Number*</b></label>
                <input type="text" class="form-control" id="mobileNo"
                  value={patient.mobileNo}
                  disabled />

              </div>
              <div class="form-group">
                <label><b>Email address*</b></label>
                <input type="email" class="form-control" id="email"
                  value={patient.email}
                  disabled />
              </div>
              <div class="form-group">
                <label><b>Password*</b></label>
                <input type="password" class="form-control" id="password"
                  value={patient.password}
                  disabled />
              </div>
              <div class="form-group">
                <label><b>Gender*</b></label>
                <input type="text" class="form-control" id="gender"
                  value={patient.gender}
                  disabled />
              </div>
              <div class="form-group">
                <label><b>Blood Group*</b></label>
                <input type="text" class="form-control" id="bloodGroup"
                  value={patient.bloodGroup}
                  disabled />
              </div>

              <div class="form-group">
                <label><b>Age*</b></label>
                <input type="text" class="form-control" id="age"
                  value={patient.age}
                  disabled />

              </div>
              <div class="form-group">
                <label><b>Address*</b></label><br />
                <textarea name="address" id="addres" rows="2" col="15"
                  class="form-control"
                  value={patient.address}
                  disabled />

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
