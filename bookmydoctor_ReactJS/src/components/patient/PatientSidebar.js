import React from 'react'
import { BrowserRouter as Router, Route, Link, useHistory, NavLink } from 'react-router-dom'
import "./PatientSidebar.css"
import ViewProfile from './ViewProfile';
import CheckDoctors from './CheckDoctors';
import ViewDoctors from './ViewDoctors';
import DoctorList from './DoctorList';
import AddAppointment from './AddAppointment';
import ManageAppointments from './ManageAppointments';
import { FiLogOut } from "react-icons/fi";
import { CgProfile, CgUserList } from "react-icons/cg";
export default function PatientSidebar(props) {
    const patient = props.history.location.state.patient;
    
    const history = useHistory();
    return (
        <Router>
            <div>
                <div class="container-fluid patient-head py-3 ">
                    <div class="row collapse show no-gutters d-flex h-100 position-relative">

                        <div class=" px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
                        </div>
                        <div class="col px-3 px-md-0 ">

                            <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
                                <i class="fa fa-bars patientFont fa-lg"></i>
                            </a>
                            <b className="float-right doctorFont">Welcome {patient.patientName}</b>
                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0 h-100">
                    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                            <div class="navbar-dark patient-head  h-100 w-sidebar">

                                <h5 class="px-3 pt-3"><b>Patient Menu</b></h5>
                                <ul class="nav flex-column flex-nowrap text-truncate">

                                    <li class="nav-item">
                                        <NavLink className="nav-link patientFont" to={`/ViewProfile/${patient.patientId}`} activeStyle={{ fontWeight: "bold", color: "black" }}><CgProfile />Profile</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link patientFont" to={`/ViewDoctors/${patient.patientId}`} activeStyle={{ fontWeight: "bold", color: "black" }}><i class="fas fa-calendar-check"></i>New Appointment</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link patientFont " to={`/ManageAppointments/${patient.patientId}`} activeStyle={{ fontWeight: "bold", color: "black" }}><CgUserList />Manage Appointments</NavLink>


                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link doctorFont" onClick={() => {
                                            history.push('/')
                                            // document.getElementById("signIn").style.display = "block";
                                            // document.getElementById("signUp").style.display = "block";

                                        }}> <FiLogOut />Signout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col p-5">
                            <Route exact path="/ViewProfile/:patientId" component={ViewProfile}></Route>
                            <Route exact path="/checkdoctors" component={CheckDoctors}></Route>
                            <Route exact path="/ViewDoctors/:patientId" component={ViewDoctors} ></Route>
                            <Route exact path="/DoctorList" component={DoctorList}></Route>
                            <Route exact path="/AddAppointment" component={AddAppointment} ></Route>
                            <Route exact path="/ManageAppointments/:patientId" component={ManageAppointments}></Route>
                        </div>
                    </div>
                </div>
            </div>


        </Router>


    )
}
