import React, { useState, useEffect } from 'react'


const axios = require('axios').default;
export default function AvailableDates({ match }) {

    const availableDates = {
        doctorId: match.params.doctorId,
        fromDate: "",
        toDate: ""
    }
    
    var [addDates, setAddDates] = useState(availableDates);
  
   

    const [message, setMessage] = useState("");
    const handleInput = (e) => {
        var { name, value } = e.target;
        setAddDates({
            ...addDates,
            [name]: value
        })
    }

  


    const handleSubmit = e => {
        e.preventDefault();


        axios.post('http://localhost:8080/addavailability', addDates).then((response) => {
            setMessage(response.data.message);
        })

        if (message != "Available Dates Added succesfully") {
            alert(message)

        } else {
            alert(message);
        }
    }
    


   
    return (
        <div>
            <h3><b>Add Available Dates</b></h3>
            <div className="row">
                <div className="col-md-5">
                    <div className="card ">
                        <form className="ml-3 mt-3" onSubmit={handleSubmit}>
                            <div class="form-group col-sm-10">
                                <label><b>Doctor ID</b></label><br />
                                <input type="text" id="doctorId"
                                    className="col-sm-12"
                                    placeholder="Doctor ID"
                                    name="doctorId"
                                    value={addDates.doctorId}
                                    disabled
                                />
                            </div>

                            <div class="form-group col-sm-10" >
                                <label><b>From Date</b></label><br />
                                <input type="date"
                                    className="col-sm-12"
                                    name="fromDate"
                                    value={addDates.fromDate}
                                    onChange={handleInput}
                                    required />

                            </div>
                            <div class="form-group col-sm-10">
                                <label><b>To Date</b></label><br />
                                <input type="date"
                                    className="col-sm-12"
                                    name="toDate"
                                    value={addDates.toDate}
                                    onChange={handleInput}
                                    required />

                            </div>
                            <div class="form-group col-sm-10">
                                <button type="submit" className="btn btn-block buttonFont mb-4" style={{ backgroundColor: "mediumvioletred" }} >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
