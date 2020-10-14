import React, { Component } from 'react'
const axios = require('axios').default;
export default class DoctorSignUp extends Component {


    state = {
        doctorName: "",
        speciality: "",
        location: "",
        hospitalName: "",
        mobileNo: "",
        email: "",
        password: ""


    };



    handleInput1 = event => {

        this.setState({ doctorName: event.target.value });
    };
    handleInput2 = event => {
        this.setState({ speciality: event.target.value });
    };
    handleInput3 = event => {
        this.setState({ location: event.target.value });
    };
    handleInput4 = event => {
        this.setState({ hospitalName: event.target.value });
    };
    handleInput5 = event => {
        this.setState({ mobileNo: event.target.value });
    };
    handleInput6 = event => {
        this.setState({ email: event.target.value });
    };
    handleInput7 = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const doctor = {
            doctorName: this.state.doctorName,
            speciality: this.state.speciality,
            location: this.state.location,
            hospitalName: this.state.hospitalName,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            password: this.state.password

        }

        axios.post('http://localhost:8080/adddoctor', doctor).then(response => {
            if (response.data.message) {
                alert(response.data.message)
                this.props.history.push('/')
                setTimeout("location.reload(true)");
            } else {
                alert(response.data.message);
            }

        })
    }

    render() {
        return (
            <div class="container">

                <div class="modal fade" id="addDoctor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content patientContent">
                            <div class="modal-header">

                                <h5 class="modal-title" id="exampleModalLabel"> <i className="fas fa-user-md ml-4 "></i>&nbsp;&nbsp;Doctor Registration</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" >

                                <form action="" onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label><b>Full Name*</b></label>
                                        <input type="text" class="form-control" id="doctorName"
                                            pattern="[A-Za-z ]{1,20}"
                                            title="Only alphabets allowed"
                                            name="doctorName"

                                            onChange={this.handleInput1}
                                            required />
                                    </div>

                                    <div class="form-group">
                                        <label><b>Speciality*</b></label>
                                        <input type="text" class="form-control" id="speciality"
                                            pattern="[A-Za-z ]{1,20}"
                                            title="Only alphabets allowed"
                                            name="speciality"

                                            onChange={this.handleInput2}
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label><b>Location*</b></label>
                                        <input type="text" class="form-control" id="location"
                                            pattern="[A-Za-z ]{1,20}"
                                            title="Only alphabets allowed"
                                            name="location"

                                            onChange={this.handleInput3}
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label><b>Hospital Name</b></label>
                                        <input type="text" class="form-control" id="hospitalName"
                                            pattern="[A-Za-z ]{1,20}"
                                            title="Only alphabets allowed"
                                            name="hospitalName"

                                            onChange={this.handleInput4}
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label><b>Mobile Number*</b></label>
                                        <input type="text" class="form-control" id="mobileNo"
                                            pattern="^[6-9][0-9]{9}"
                                            title="Mobile Number Starts with 6,7,8,9 and contains only 10 digits"
                                            name="mobileNo"

                                            onChange={this.handleInput5}
                                            required
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label><b>Email address*</b></label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                            name="email"

                                            onChange={this.handleInput6}
                                            required
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label><b>Password*</b></label>
                                        <input type="password" class="form-control" id="password"
                                            pattern="^[A-Za-z]\w{7,14}$"
                                            title="password should contain one special character and minimum 8 characters"
                                            name="password"

                                            onChange={this.handleInput7}
                                            required
                                        />
                                    </div>
                                    <div class="button">
                                        <button type="submit" class="btn buttonFont btn-block" style={{ backgroundColor: "mediumvioletred" }}>Submit</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




