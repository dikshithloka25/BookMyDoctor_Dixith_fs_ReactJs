import React, { useState, useEffect } from 'react';
import './ViewFeedbaks.css';
import { FcRating } from "react-icons/fc";
const axios = require('axios').default;
export default function ViewFeedbacks(props) {
    const [feedbacks, setFeedbacks] = useState([]);
    const doctorId = props.doctor.doctorId;
    useEffect(() => {
        axios.get('http://localhost:8080/getfeedback', {
            params: {
                doctorId: doctorId

            }
        }
        ).then((response) => {
            setFeedbacks(response.data.list)
        });
    }, [doctorId])
    return (

        <div class="container">

            {
                feedbacks.map((feedback, id) =>
                    <div class="col-md-7">
                        <div class="card" id="rating-card">
                            <div class="card-body-rating">
                                <div class="group">
                                    <h5><FcRating />&nbsp;&nbsp;{feedback.patientName}</h5>
                                    <h5>{feedback.rating}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>

    )
}