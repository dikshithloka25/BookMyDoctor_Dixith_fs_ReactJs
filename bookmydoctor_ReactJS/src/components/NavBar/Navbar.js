import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import Login from '../login/Login';
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light " id="nav">
        <Link class="navbar-brand" href="#"> <i className="fas navFont fa-clinic-medical fa-3x ml-5"></i></Link>
        <h4 className=" navFont mt-4"><b>BOOK<br />MY DOC</b></h4>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">

          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <NavLink exact className="nav-link" to="/" activeStyle={{ color: "red" }}>Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/AboutUs" activeStyle={{ color: "red" }}>AboutUs</NavLink>
            </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/Contact" activeStyle={{ color: "red" }}>Contact</NavLink>
            </li>
            <li className="nav-item active" id="signUp">
              <NavLink className="nav-link" to="/SignUp" id="signUp" activeStyle={{ color: "red" }}>Sign Up</NavLink>
            </li>
            <li className="nav-item active" id="signIn">
              <Link exact className="nav-link" to="/Login" id="signIn" data-toggle="modal" data-target="#doctorModal"  >Sign In</Link>

            </li>
          </ul>
        </div>
      </nav>
      <div class="modal fade" id="doctorModal" tabindex="-1" aria-labelledby="doctorModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body" id="loginModal">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
