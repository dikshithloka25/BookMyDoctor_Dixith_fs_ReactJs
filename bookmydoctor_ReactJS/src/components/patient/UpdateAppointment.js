import React from 'react';
//import './SignupPatient.css'; 


 
export default function UpdateAppointment(){  

   
    return(
        <div class="container">
         
         <div class="col-md-6"> 
         <div class="card">
         <div class="card-body" > 
         <form>
         <div class="form-group">
             <h4 class="header-color"><b>Update Appointment...</b></h4>
             <hr/>
            </div> 
            <div class="form-group">
             <label><b>Patient Name</b></label>
             <input type="text" class="form-control" id="patientName" 
             pattern="^[a-zA-Z]{4,15}"
             title="Only alphabets allowed 4 - 15 letters" required/>
            </div> 
            <div class="form-group">
                        
             <label ><b>Mobile Number</b></label>
             <input type="text" class="form-control" id="mobileNo" 
             pattern="^[6-9][0-9]{9}"
             title="it contain 10 digits start with 6 7 8 9 " required />
             
            </div> 
            
            <div class="form-group">
             <label><b>Appointment date</b></label><br/>
             
             <input type="date" min="2020-10-01"
             max="2020-10-31"
             class="form-control"
             name="appointmentDate" required/>
            
            </div>
          <div class="button">
           
            <button type="submit" class="btn buttonFont btn-block" style={{backgroundColor:"mediumvioletred"}}>Update</button>
            
          </div>
          </form>
          </div>
          </div>
          </div>
     </div>  
    )
    }