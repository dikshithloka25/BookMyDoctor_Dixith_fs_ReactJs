import React from 'react';
import "./AdminSidebar.css";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import ShowDoctor from './ShowDoctor';
import ShowPatient from './ShowPatient';
import ShowAppointment from './ShowAppointment';
import ShowAllDoctors from './ShowAllDoctors';
import ShowAllPatients from './ShowAllPatients';
import ShowAllAppointments from './ShowAllAppointments';
import ShowAllFeedbacks from './ShowAllFeedbacks';
import { FiLogOut } from "react-icons/fi";
import { FcRatings } from "react-icons/fc";

export default function AdminSidebar() {
    const history = useHistory();
    return (
        <Router>
            <div>
                <div class="container-fluid py-3 adminHead">
                    <div class="row collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex"></div>
                        <div class="col px-3 px-md-0">
                            <a
                                data-toggle="collapse"
                                href="#"
                                data-target=".collapse"
                                role="button"
                                class="p-1"
                            >
                                <i class="fa fa-bars adminFont  fa-lg"></i>
                            </a>
                            <b className="float-right adminFont">WELCOME ADMIN</b>
                        </div>
                    </div>
                </div>
                <div class="container-fluid px-0 h-100">
                    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
                        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
                            <div class="navbar-dark adminHead h-100 w-sidebar">
                                <h5 class="px-3 pt-3"><b>Admin Menu</b></h5>
                                <ul class="nav flex-column flex-nowrap text-truncate">

                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <button class="btn buttonFont dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "mediumvioletred" }}>
                                                <i class="fas fa-tasks"></i> Manage Doctors </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/ShowDoctor">Show Doctor </Link>
                                                <Link className="dropdown-item" to="/ShowAllDoctors">Show All Doctors </Link>


                                            </div>
                                        </div>
                                    </li>

                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <button class="btn buttonFont dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "mediumvioletred" }}>
                                                <i class="fas fa-tasks"></i> Manage Patients </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/ShowPatient">Show Patient </Link>
                                                <Link className="dropdown-item" to="/ShowAllPatients">Show All Patients </Link>


                                            </div>
                                        </div>
                                    </li>

                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <button class="btn buttonFont dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "mediumvioletred" }}>
                                                <i class="fas fa-tasks"></i> Manage Appointments </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/ShowAppointment">Show Appointment </Link>
                                                <Link className="dropdown-item" to="/ShowAllAppointments">Show All Appointments </Link>


                                            </div>
                                        </div>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/ShowAppointment">
                                            <i>ShowAppointment</i>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/ShowAllAppointments">
                                            <i>ShowAllAppointments</i>
                                        </Link>
                                    </li> */}
                                    <li class="nav-item">
                                        <Link className="nav-link buttonFont" to="/ShowAllFeedbacks">
                                            <FcRatings />ShowAllFeedbacks
                                        </Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/DeleteDoctor">
                                            <i>DeleteDoctor</i>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link adminFont" to="/DeletePatient">
                                            <i>DeletePatient</i>
                                        </Link>
                                    </li> */}


                                    <li class="nav-item">

                                        <Link className="nav-link buttonFont" onClick={() => {
                                            history.push('/')
                                        }}> <FiLogOut />Signout
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col p-3">
                            <Route exact path="/ShowDoctor" component={ShowDoctor}></Route>
                            <Route exact path="/ShowPatient" component={ShowPatient}></Route>
                            <Route exact path="/ShowAppointment" component={ShowAppointment}></Route>
                            <Route exact path="/ShowAllDoctors" component={ShowAllDoctors}></Route>
                            <Route exact path="/ShowAllPatients" component={ShowAllPatients}></Route>
                            <Route exact path="/ShowAllAppointments" component={ShowAllAppointments}></Route>
                            <Route exact path="/ShowAllFeedbacks" component={ShowAllFeedbacks}></Route>


                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}
