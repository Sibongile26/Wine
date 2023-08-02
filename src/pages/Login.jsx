import React, { useContext, useEffect, useState } from "react";
import '../pages/login.css'
("react-bootstrap/Button");
import Header from "../components/Header";


import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function App() {
  

  const navigate = useNavigate();

  const [data] = useContext(AppContext);

  console.log(data)

  const [emailForm, setEmailForm] = useState('');
  const [passForm, setPassForm] = useState('');

  function eventEmail(e) {
     setEmailForm(e.target.value)
  }

  function eventPassword(e) {
    setPassForm(e.target.value)
  }

  function Login() {

   

    if (data.email === emailForm && data.password === passForm) {

      alert('Login Successfully')

      navigate("/");
    }
    else
    {
       alert('Login unsuccessfully')
    }

  }


  return (
    <div className='wallpaper'>
      <Header />
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                defaultValue={emailForm}
                onChange={eventEmail}
                
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                defaultValue={passForm}
                onChange={eventPassword}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <button className="mb-4 w-100 bg-btn" onClick={Login}>
                  Sign in
                </button>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className="mx-2" color="danger"></MDBBtn>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center">
              <img
                id="test"
                src="https://cdn.discordapp.com/attachments/1121788453793832981/1121797157897392308/6022263c97d5fb0021955751_optimized_740_c740x1120-0x0.fae1a8a6b48bbcc215ad.webp"
              ></img>
              <img />

              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;
