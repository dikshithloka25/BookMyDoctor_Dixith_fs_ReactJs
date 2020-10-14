import React,{useState , useEffect}  from 'react'
import UpdateAvailableDates from './UpdateAvailableDates';
const axios = require('axios').default;
export default function GetAvailableDates({match}) {
    
const doctorId= match.params.doctorId;

var [dates, setDates] = useState(false);
var [available, setAvailable] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8080/getavailabilitydatesofdoctor', {
            params: {
                doctorId: doctorId
            }
        }
        ).then((response) => {
            setAvailable(response.data.bean);
        });
    }, [doctorId])
    console.log(doctorId);
    console.log(available);
 if (dates) {
        return <UpdateAvailableDates available={available}/>
        
    }
    return (
        <div>
           <table className="table table-striped">
                        <thead className="thead-dark">
                            <th>AvailableDates ID</th>
                            <th>Doctor ID</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Update</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{available.availabilityId}</td>
                                <td>{available.doctorId}</td>
                                <td>{available.fromDate}</td>
                                <td>{available.toDate}</td>
                                <td>

                                    <a className="btn text-primary" >
                                        <i className="fas fa-pencil-alt " onClick={() => { setDates(true) }}></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>  
        </div>
    )
}
