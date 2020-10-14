import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SignUp from "./components/signUp/SignUp"

import DoctorSidebar from './components/doctor/DoctorSidebar';
import Navbar from './components/NavBar/Navbar';
import Contact from './components/home/Contact';
import Home from './components/home/Home';
import PatientSidebar from './components/patient/PatientSidebar';
import AboutUs from './components/aboutUs/AboutUs';
import AdminSidebar from './components/admin/AdminSidebar';

function App() {



  return (
    <Router>


      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/AboutUs" component={AboutUs}></Route>
      <Route path="/DoctorSidebar" component={DoctorSidebar}></Route>
      <Route path="/PatientSidebar" component={PatientSidebar}></Route>
      <Route path="/AdminSidebar" component={AdminSidebar}></Route>



    </Router>
  );

}

export default App;
