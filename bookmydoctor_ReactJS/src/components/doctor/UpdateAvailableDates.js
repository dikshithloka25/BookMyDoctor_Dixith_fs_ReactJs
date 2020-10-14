import React, { useState ,useEffect} from 'react'
import AvailableDates from './AvailableDates'
const axios = require('axios').default;
export default function UpdateAvailableDates(props) {
var [availability ,setAvailability] = useState(props.available);
const [message, setMessage] = useState("");
const handleInput = (e) => {

    var { name, value } = e.target;
    setAvailability({
      ...availability,
      [name]: value
    })
  }
  useEffect(() => {
    axios.put('http://localhost:8080/updateavailability', availability


    ).then((response) => {
      setMessage(response.data.message);
    });
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "Available Dates Updated succesfully") {

      alert("Updated Successfully");


    } else {
      alert("not Updated");
    }
  }

    return (
        <div >
            <div class="container">
                <div class="col-md-6">
                    <div class="card mt-4">
                        <div class="card-body" >
                            <h4 className="fontColor"><b>Update Available Dates</b></h4>
                            <hr />

                            <form className="ml-3 mt-3" onSubmit={handleSubmit}>

                                <div class="form-group col-sm-10">
                                    <label><b>AvailabilityDate ID</b></label><br />
                                    <input type="text" id="availabilityId"
                                        className="col-sm-12"
                                        placeholder="Availability ID"
                                        value={props.available.availabilityId}
                                        disabled
                                    />
                                </div>
                                <div class="form-group col-sm-10">
                                    <label><b>Doctor ID</b></label><br />
                                    <input type="text" id="doctorId"
                                        className="col-sm-12"
                                        placeholder="Doctor ID"
                                        value={props.available.doctorId}
                                        disabled
                                    />
                                </div>

                                <div class="form-group col-sm-10">
                                    <label><b>From Date</b></label><br />
                                    <input type="date"
                                       
                                       className="col-sm-12"
                                        name="fromDate"
                                        onChange={handleInput}
                                        required />

                                </div>
                                <div class="form-group col-sm-10">
                                    <label><b>To Date</b></label><br />
                                    <input type="date"
                                        className="col-sm-12"
                                        name="toDate" 
                                        onChange={handleInput}
                                        required />

                                </div>
                                <div class="form-group col-sm-10">
                                    <button type="submit" className="btn btn-block buttonFont mb-4" style={{backgroundColor:"mediumvioletred"}}>update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
