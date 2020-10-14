import React, { useEffect, useState } from 'react'

import './ShowDoctor.css'
const axios = require('axios').default;
export default function ShowAllFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [deleteFeedback , setDeleteFeedback] = useState(null);
    useEffect(() => {

        axios.get('http://localhost:8080/getallfeedbacks').then((response) => {
            setFeedbacks(response.data.list)
        });

    })
    return (
        <div>


            <div class="col-md-9">
                <table className="table table-striped">
                    <thead className="thead-dark"
                  
                    >
                        <tr>
                            <th scope="col">Rating Id</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Doctor Id</th>
                            <th scope="col">Patient Id</th>
                           

                        </tr>
                    </thead>
                    <tbody>

                        {
                            feedbacks.map(
                                feedback =>
                                    <tr key={feedback.id}>
                                        <th scope="row"> {feedback.ratingId}</th>
                                        <td>{feedback.rating}</td>

                                        <td>{feedback.doctorInfo.doctorId}</td>
                                        <td>{feedback.patientInfo.patientId}</td>
                                        

                                    </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
