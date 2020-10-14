import React, { Component } from 'react'
import "./PatientSignUp.css"
const axios = require('axios').default;
export default class PatientSignUp extends Component {
    state = {
        patientName: "",
        mobileNo: "",
        email: "",
        password: "",
        gender: "",
        bloodGroup: "",
        age: "",
        address: ""


    };

    handleInput1 = event => {

        this.setState({ patientName: event.target.value });
    };
    handleInput2 = event => {
        this.setState({ mobileNo: event.target.value });
    };
    handleInput3 = event => {
        this.setState({ email: event.target.value });
    };
    handleInput4 = event => {
        this.setState({ password: event.target.value });
    };
    handleInput5 = event => {
        this.setState({ gender: event.target.value });
    };
    handleInput6 = event => {
        this.setState({ bloodGroup: event.target.value });
    };
    handleInput7 = event => {
        this.setState({ age: event.target.value });
    };
    handleInput8 = event => {
        this.setState({ address: event.target.value });
    };


    handleSubmit = event => {
        event.preventDefault();

        const patient = {
            patientName: this.state.patientName,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            bloodGroup: this.state.bloodGroup,
            age: this.state.age,
            address:this.state.address

        }

        axios.post('http://localhost:8080/addpatient', patient).then(response => {
         if(response.data.message){
            alert(response.data.message)
            this.props.history.push('/')
            setTimeout("location.reload(true)");
         }else{
             alert(response.data.message);
         }
           
        })
    }

    render() {


        return (
            <div class="container">

                <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content patientContent">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> <i class="fas fa-user-injured mr-2"></i>Patient Registration</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" >

                                <form
                                    
                                    action="" onSubmit={this.handleSubmit}>


                                    <div class="form-group">
                                        <label><b>Full Name*</b></label>
                                        <input type="text" class="form-control" id="patientName" pattern="[A-Za-z ]{1,20}"
                                            title="Only alphabets allowed"
                                            name="patientName"
                                           
                                            onChange={this.handleInput1}
                                            required />
                                    </div>

                                    <div class="form-group">
                                        <label ><b>Mobile Number*</b></label>
                                        <input type="number" class="form-control" id="mobileNo"
                                            pattern="^[6-9][0-9]{9}"
                                            title="Mobile Number Starts with 6,7,8,9 and contains only 10 digits"
                                            name="mobileNo"
                                          
                                            onChange={this.handleInput2}
                                            required />

                                    </div>
                                    <div class="form-group">
                                        <label><b>Email address*</b></label>
                                        <input type="email" class="form-control" id="email"
                                            name="email"
                                           
                                            onChange={this.handleInput3}
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label ><b>Password*</b></label>
                                        <input type="password" class="form-control" id="password"
                                            pattern="^[A-Za-z]\w{7,14}$"
                                            title="password should contain one special character and minimum 8 characters"
                                            name="password"
                                            
                                            onChange={this.handleInput4}
                                            required />
                                    </div>
                                   

                                    <div class="form-group form-check">
                                        <label id="check-box"><b>Gender :</b> &nbsp;&nbsp;</label>
                                        <input type="radio" name="gender" value="male"
                                            onChange={this.handleInput5} id="check" />&nbsp;<b>Male</b>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="gender" value="female"
                                            onChange={this.handleInput5} id="check" />&nbsp;<b>Female</b>
                                    </div>

                                    <div class="form-group form-check">
                                        <label for="checkbox" id="check-box"><b>Blood group :</b> &nbsp;&nbsp;</label>
                                        <input type="radio" name="bloodGroup" value="A+"
                                            onChange={this.handleInput6} id="check1" />&nbsp;A+&nbsp;&nbsp;
                                    <input type="radio" name="bloodGroup" value="A-"
                                            onChange={this.handleInput6} id="check1" />&nbsp;A-&nbsp;&nbsp;
                                    <input type="radio" name="bloodGroup" value="B+"
                                            onChange={this.handleInput6} id="check1" />&nbsp;B+&nbsp;&nbsp;
                                    <input type="radio" name="bloodGroup" value="B-"
                                            onChange={this.handleInput6} id="check1" />&nbsp;B-&nbsp;&nbsp;
                                    <input type="radio" name="bloodGroup" value="O+"
                                            onChange={this.handleInput6} id="check1" />&nbsp;O+&nbsp;&nbsp;
                                    <input type="radio" name="bloodGroup" value="O-"
                                            onChange={this.handleInput6} id="check1" />&nbsp;O-
                                </div>

                                    <div class="form-group">
                                        <label ><b>Age*</b></label>
                                        <input type="text" class="form-control" id="age"
                                            pattern="[1-9]{1}[0-9]{1,2}"
                                            title="Age between 1 to 130"
                                            name="age"
                                           
                                            onChange={this.handleInput7}
                                            required />

                                    </div>
                                    <div class="form-group">
                                        <label><b>Address*</b></label><br />
                                        <textarea name="address" id="address" pattern="^[A-Za-z]\w{5,100}$"
                                            title="Range between 5 to 100 "
                                            name="address"
                                           
                                            onChange={this.handleInput8}
                                            required />

                                    </div>
                                    <div class="button">

                                        <button class="btn buttonFont btn-block" type="submit"
                                            style={{ backgroundColor: "mediumvioletred" }}>Submit</button>

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