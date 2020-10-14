
import React,{ useState, useEffect} from 'react';
import "./UpdateProfile.css"



const axios = require('axios').default;
export default function UpdateProfile(props) {
  var [updatePatient, setUpdatePatient] = useState(props.patient);
  var [message, setMessage] = useState("");
  const handleInput = (e) => {

    var { name, value } = e.target;
    setUpdatePatient({
        ...updatePatient,
        [name]: value
    })
}

useEffect(() => {
  axios.put('http://localhost:8080/updatepatient', updatePatient


  ).then((response) => {
      setMessage(response.data.message);
  });
})

const handleSubmit = (e) => {
  e.preventDefault();

  if (message === "Patient Updated succesfully") {

      alert(message);

     
  } else {
      alert(message);
  }
}

  return (
    <div class="container">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body" >
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <h4 class="header-color"><b>Upadate Profile</b> </h4>
                <hr />
              </div>
              <div class="form-group">
                <label><b>Patient ID*</b></label><br />
                <input type="text" value={updatePatient.patientId}
                  className="form-control"
                  id="patientId" disabled />
              </div>
              <div class="form-group">
                <label><b>Full Name*</b></label>
                <input type="text" class="form-control" id="patientName"
                  pattern="^[a-zA-Z]+$"
                  title="Only alphabets allowed" 
                  name="patientName"
                  value={updatePatient.patientName}
                  onChange={handleInput}
                  required />
              </div>
              <div class="form-group">

                <label><b>Mobile Number*</b></label>
                <input type="text" class="form-control" id="mobileNo"
                  pattern="^[6-9]{1}[0-9]{9}"
                  title="it contain 10 digits"
                  name="mobileNo"
                  value={updatePatient.mobileNo}
                  onChange={handleInput}
                  required />

              </div>
              <div class="form-group">
                <label><b>Email address*</b></label>
                <input type="email" class="form-control" id="email" 
                 name="email"
                 value={updatePatient.email}
                 onChange={handleInput}
                />
              </div>
              <div class="form-group">
                <label><b>Password*</b></label>
                <input type="password" class="form-control" id="password"
                  pattern="^[A-Za-z]\w{7,14}$"
                  title="password should contain one special character and minimum 8 characters"
                  name="password"
                  value={updatePatient.password}
                  onChange={handleInput}
                 
                 required />
              </div>
              <div class="form-group form-check">
                <label id="check-box"><b>Gender :</b> &nbsp;&nbsp;</label>
                <input type="radio" name="gender" value="Male" id="check"  onChange={handleInput}/>&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="gender" value="Female" id="check"  onChange={handleInput} />&nbsp;Female
                </div>

              <div class="form-group form-check">
                <label for="checkbox" id="check-box"><b>Blood group :</b> &nbsp;&nbsp;</label>
                <input type="radio" name="bloodGroup" value="A+" id="check1"  onChange={handleInput}/>&nbsp;A+&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="A-" id="check1"  onChange={handleInput}/>&nbsp;A-&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="B+" id="check1"  onChange={handleInput}/>&nbsp;B+&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="B-" id="check1"  onChange={handleInput}/>&nbsp;B-&nbsp;&nbsp;
                <input type="radio" name="bloodGroup" value="O+" id="check1"  onChange={handleInput}/>&nbsp;O+&nbsp;
                <input type="radio" name="bloodGroup" value="O-" id="check1"  onChange={handleInput}/>&nbsp;O-
                </div>

              <div class="form-group">
                <label><b>Age*</b></label>
                <input type="number" class="form-control" id="age"
                  // pattern="[1-9]{1}[0-9]{2}"
                  // title="Age between 1 to 130" 
                  required 
                  name="age"
                  value={updatePatient.age}
                  onChange={handleInput}
                  />

              </div>
              <div class="form-group">
                <label><b>Address*</b></label><br />
                <textarea name="address" id="address" rows="2" col="15"
                  class="form-control"
                  pattern="^[A-Za-z]\w{5,100}$"
                  title="Range between 5 to 100 " required 
                  name="address"
                  value={updatePatient.address}
                  onChange={handleInput}
                  />

              </div>
              <div class="button">

                <button type ="submit" class="btn btn-block" style={{ backgroundColor: "mediumvioletred" }}>Update</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}