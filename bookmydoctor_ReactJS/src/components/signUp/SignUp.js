
import React from 'react';

import doctor1 from './doctor3.png'
import patient from './patient.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PatientSignUp from "./PatientSignUp"
import "./SignUp.css"
import DoctorSignUp from './DoctorSignUp';
import Home from '../home/Home';



export default function SignUp() {
    return (
        <Router>
        <div className="row">

            <div className="col-md-5">
                <div className="signup-patient">
                    <img className="doctorImg1" src={patient} />
                    <div className="text-one-one">
                        <h3>I'm a new Patient</h3>
                    </div>
                    <div className="text-two-two">
                        <p>Find a doctor and book an appointment.<br />online for free!</p>
                    </div>
                    <div class="button-one" id="patient-button">

                        <Link to="/PatientSignUp"><button id="button-one" data-toggle="modal" data-target="#add"><h>Join now</h></button></Link>

                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <div className="signup-doctor">
                    <img className="doctorImg2" src={doctor1} />
                    <div className="text-one">
                        <h3>I'm a Doctor / heath care provider</h3>
                    </div>
                    <div className="text-two">
                        <p>Quicker way for your patient to schedule an appointment.<br />online for free!</p>
                    </div>
                    <div class="button-two" id="doctor-button">
                        <Link to="/DoctorSignUp">
                            <button id="button-two" data-toggle="modal" data-target="#addDoctor"><hh>Join now</hh></button><br></br>
                        </Link>

                    </div>
                </div>
            </div>
            
        </div>

        <Route exact path="/PatientSignUp" component={PatientSignUp}></Route>
        <Route exact path="/DoctorSignUp" component={DoctorSignUp}></Route>
        <Route exact path="/" component={Home}></Route>
    </Router>
    )
}