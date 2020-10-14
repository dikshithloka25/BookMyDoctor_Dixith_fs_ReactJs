
import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom'
import DoctorList from './DoctorList';



const axios = require('axios').default;
export default function ViewDoctors({match}) {

    const [state, setstate] = useState(false)
    const [speciality, setSpeciality] = useState("");
    const [location, setLocation] = useState("");
    
    const [doctors, setDoctors] = useState([]);
const patientId = match.params.patientId;
    useEffect(() => {
        axios.get('http://localhost:8080/getdoctors', {
            params: {
                speciality: speciality,
                location: location
            }
        }
        ).then((response) => {
            setDoctors(response.data.list)
        });
    }, [speciality, location])


    const handleSubmit = e => {
        e.preventDefault();
        if (doctors != null) {
            setstate(true);
        } else {
            alert("No doctors Found with that speciality");
        }

    }
    if(state){

        return <DoctorList doctors = {doctors} patientId = {patientId}/>
    }

    return (

        <div class="col-md-6 card" id="card-card">
            <div class="card-body">

                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <h5 class="header-color"><b>Check Doctors based on speciality...</b></h5>
                    </div>
                    <div class="form-group">
                        <label><b>Speciality</b></label>
                        <input type="text" class="form-control" id="speciality"
                            pattern="^[a-zA-Z]{4,15}"
                            title="Only alphabets allowed 4 - 15 letters"
                            name="speciality"
                            onChange={e => { setSpeciality(e.target.value) }}
                            required />
                    </div>
                    <div class="form-group">
                        <label ><b>Location</b></label>
                        <input type="text" class="form-control" id="location"
                            pattern="^[a-zA-Z]{4,15}"
                            title="Only alphabets allowed 4 - 15 letters"
                            name="location"
                            onChange={e => { setLocation(e.target.value) }}
                            required />
                    </div>
                    <div class="button">

                        <button type="submit" class="btn buttonFont btn-block" style={{ backgroundColor: "mediumvioletred" }}>Submit</button>

                    </div>
                </form>
            </div>
        </div>


    )
}

    //<Route exact path="/doctorList" component={DoctorList} />
    //