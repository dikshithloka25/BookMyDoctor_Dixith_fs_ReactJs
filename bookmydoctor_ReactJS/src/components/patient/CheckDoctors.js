import React,{useState} from 'react';
import './CheckDoctors.css';
import {FcConferenceCall,FcOk,FcRating} from "react-icons/fc";
import {BrowserRouter as Router, Route, Link,useHistory} from 'react-router-dom'
//import ViewDoctors from './ViewDoctors';


export default function  CheckDoctors(){  
    const [state, setstate] = useState(false)

    const history = useHistory();

    const handleClick = ()=>{
       
      history.push("/ViewDoctors");
       //setstate(true);
        
    }
    
    return( 
        <Router>
            <div class="row">

            <div class="col-md-2">
                <div class="card" id="firstcard">
                <div class="card-body" id="card-body-first">  
                <h1><FcConferenceCall/></h1>
                
                <button type="submit" class="btn btn-block" id="btn" onClick={handleClick}>Check doctors</button>
                
                </div>
                </div>
            </div>
            <div class="col-md-2">

            </div>
            <div class="col-md-2">
                <div class="card" id="firstcard">
                <div class="card-body" id="card-body-first">  
                <h1><FcOk/></h1>
                <Link to="#"></Link>
                <button type="submit" class="btn btn-block" id="btn">Feedbacks</button>         
                <Link/>
                </div>
              
            </div>
            </div>
            </div>
            
            
        </Router> 
        
        
    )
} 

