import React, { Component } from 'react'

const axios = require('axios').default;
export default class ShowDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            doctorId: "",
            doctor: {}
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({ doctorId: e.target.value })
    }

    handleClick() {
        axios.get('http://localhost:8080/getdoctor', {
            params: {
                doctorId: this.state.doctorId
            }
        }
        ).then((response) => {
            this.setState({ doctor: response.data.bean })
        });
    }
    render() {
        return (
            <div>
              
                    <div className="card col-md-6 mb-3">


                        <div class="form-group">
                            <label className="mt-4"><b>Enter ID to get Doctor</b></label>
                            <input type="number" id="doctorId" placeholder=" Enter Doctor ID"
                                value={this.state.doctorId}
                                onChange={this.handleInput}
                                class="form-control"
                                required />
                        </div>
                        <div class="form-group">
                            <button className="btn buttonFont btn-block " onClick={this.handleClick} style={{ background: " rgb(28, 171, 228)" }}
                            >Get Doctor</button>
                        </div>

                    </div>
                    <div class="col-md-11">

                    </div>

                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Doctor ID</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Speciality</th>
                                <th scope="col">Location</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email</th>
                               


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"> {this.state.doctor.doctorId}</th>


                                <td>{this.state.doctor.doctorName}</td>
                                <td>{this.state.doctor.speciality}</td>
                                <td>{this.state.doctor.location}</td>
                                <td>{this.state.doctor.hospitalName}</td>
                                <td>{this.state.doctor.mobileNo}</td>
                                <td>{this.state.doctor.email}</td>
                                

                            </tr>
                        </tbody>
                    </table>
                </div>

            
        )
    }
}

