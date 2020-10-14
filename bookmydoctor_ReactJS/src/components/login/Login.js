import React, { useState } from 'react'
import PatientSignIn from './PatientSignIn';
import DoctorSignIn from './DoctorSignIn';
import "./Login.css"
import AdminSignIn from './AdminSignIn';




export default function Login() {

    var [doctorLogin, setDoctorLogin] = useState(false);
    var [patientLogin, setPatientLogin] = useState(false);
    var [adminLogin, setAdminLogin] = useState(true);
    var setDoctor = () => {
        setDoctorLogin(true);
        setPatientLogin(false);
        setAdminLogin(false);
    }

    var setPatient = () => {
        setPatientLogin(true);
        setDoctorLogin(false);
        setAdminLogin(false);
    }
    var setAdmin = () => {
        setAdminLogin(true);
        setDoctorLogin(false);
        setPatientLogin(false);
    }
    return (

        <div>
            <div className="root-container ">

                <div className="box-controller">
                    <div
                        className={"controller " + (doctorLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setDoctor}>
                        <i class="fas fa-user-md ml-4 "></i> <b>Doctor</b>
</div>
                    <div
                        className={"controller " + (patientLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setPatient}>
                        <i class="fas fa-user-injured mr-2"></i> <b>Patient</b>
</div>
<div
                        className={"controller " + (adminLogin
                            ? "selected-controller"
                            : "")}
                        onClick={setAdmin}>
                        <i class="fas fa-user-circle mr-2"></i> <b>Admin</b>
                     
</div>

                </div>
                <div className="box-container">
                    {doctorLogin && <DoctorSignIn />}
                    {patientLogin && <PatientSignIn />}
                    {adminLogin && <AdminSignIn />}
                </div>


            </div>
        </div>



    )
}
