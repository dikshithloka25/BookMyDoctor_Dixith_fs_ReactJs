import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;
export default function AdminSignIn() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [message, setMessage] = useState({});


  useEffect(() => {
    axios.get('http://localhost:8080/adminlogin', {
      params: {
        email: email,
        password: password
      }
    }
    ).then((response) => {
      setMessage(response.data.message)
    });

  }, [email, password])
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
   if(message === "Admin login successfull"){
alert(message);
     history.push("/AdminSidebar");
     setTimeout("location.reload(true)");
   }else{
     alert("not logged in");
   }
      
    
  }
  return (

    <div>

      <form onSubmit={handleSubmit}>
        <div className="inner-container">

          <div className="header">
            <i className="fas fa-user mr-2 "></i>Admin login
  </div>
          <div className="box">

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="login-input"
                placeholder="email"
                onChange={
                  e => { setEmail(e.target.value) }
                }
                required />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="password"
                pattern="^[A-Za-z]\w{7,14}$"
                title="password should contain minimum 7 characters"
                onChange={
                  e => { setPassword(e.target.value) }
                }
                required />
            </div>

            <button
              type="submit"
              className="login-btn"


            >Login</button>
          </div>

        </div>

      </form>

    </div>


  );
}
