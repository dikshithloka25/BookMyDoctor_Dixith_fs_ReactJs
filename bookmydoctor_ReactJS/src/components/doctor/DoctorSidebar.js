import React, { useState } from 'react'
import "./DoctorSidebar.css"
import { BrowserRouter as Router, Route, Link, useHistory, NavLink } from 'react-router-dom'
import ShowAppointments from './ShowAppointments'
import DoctorProfile from './DoctorProfile'
import AvailableDates from './AvailableDates'
import { FiLogOut } from "react-icons/fi";
import { CgProfile,CgUserList } from "react-icons/cg";
import GetAvailableDates from './GetAvailableDates'

export default function DoctorSidebar(props) {

    const object = props.history.location.state.doctor;
    const doctor = {
        doctorId: object.doctorId,
        doctorName: object.doctorName,
        speciality: object.speciality,
        location: object.location,
        hospitalName: object.hospitalName,
        mobileNo: object.mobileNo,
        email: object.email,
        password: object.password
    }
   

    const history = useHistory();
    

    return (
        <Router>
            <div>
                <div class="container-fluid doctorHead py-3 ">
                    <div class="row collapse show no-gutters d-flex h-100 position-relative">

                        <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">
                        </div>
                        <div class="col px-3 px-md-0">

                            <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
                                <i class="fa fa-bars doctorFont fa-lg"></i>
                            </a>
                            <b className="float-right doctorFont">Welcome Dr.{doctor.doctorName}</b>



                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0 h-100">
                    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                            <div class="navbar-dark doctorHead  h-100 w-sidebar">

                                <h6 class="px-3 pt-3" ><b>Doctor Menu</b></h6>
                                <ul class="nav flex-column flex-nowrap text-truncate">
                                    <li class="nav-item">
                                        <NavLink className="nav-link doctorFont" to={`/DoctorProfile/${doctor.doctorId}`} activeStyle={{  fontWeight: "bold",color: "black" }} ><CgProfile/>Profile</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link doctorFont" to={`/ShowAppointments/${doctor.doctorId}`} activeStyle={{  fontWeight: "bold",color: "black" }}><CgUserList/>Show Appointments</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link doctorFont" to={`/AvailableDates/${doctor.doctorId}`} activeStyle={{  fontWeight: "bold",color: "black" }}><i class="far fa-calendar-minus"></i>Available Dates</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link doctorFont" to={`/GetAvailableDates/${doctor.doctorId}`} activeStyle={{  fontWeight: "bold",color: "black" }}><i class="fas fa-calendar-check"></i>Get Available Dates</NavLink>
                                    </li>
                                    <li class="nav-item">
                                   
                                        <Link className="nav-link doctorFont" onClick={() => {
                                            history.push('/')

                                        }}> <FiLogOut/>Signout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col p-3">

                            <Route exact path="/DoctorProfile/:doctorId" component={DoctorProfile}></Route>
                            <Route exact path="/ShowAppointments/:doctorId" component={ShowAppointments}></Route>
                            <Route exact path="/AvailableDates/:doctorId" component={AvailableDates}></Route>
                            <Route exact path="/GetAvailableDates/:doctorId" component={GetAvailableDates}></Route>


                        </div>
                    </div>
                </div>
            </div>
        </Router>

    )
}
