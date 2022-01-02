import React, { useState } from 'react'
import img from "../../Assets/images/undraw_file_sync_ot38.svg"
import { Link } from 'react-router-dom';
import SocialAuth from './SocialAuth';
import { BaseURL } from '../Global';
import axios from 'axios';

function Signin() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.email, inputs.password)


    var bodyFormData = new FormData();
    bodyFormData.append('email', inputs.email);
    bodyFormData.append('password', inputs.password);

    axios({
      method: "post",
      url: `${BaseURL}/account/signin`,
      data: bodyFormData,
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        fetchRefreshToken()
        // fetchUserProfile()
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });


      function fetchRefreshToken () {
        axios({
        method: "POST",
        url: `${BaseURL}/account/token/refreshtoken`,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
      }

      function fetchUserProfile () {
        axios({
        method: "GET",
        url: `${BaseURL}/account/profile_function`,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
      }

  }
  

    return (
        <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src={img} alt="background" className="img-fluid"/>
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                  <h3><strong>ClownDev.com</strong></h3>
                </div>
                <form className='authentication-form' onSubmit={handleSubmit} method="post">

                  <div className="form-group first">
                    <input required type="email" className="form-control" id="username" name="email" onChange={handleChange} placeholder='Enter your email'/>
                  </div>

                  <div className="form-group last mb-4">
                    <input required type="password" className="form-control" id="password" name="password" onChange={handleChange} placeholder='Enter your password'/>
                  </div>
                  
                  <div className="d-flex mb-5 align-items-center">
                    <span className="ml-auto"><Link to="/forgotpassword" className="forgot-pass">Forgot Password ?</Link></span> 
                  </div>
    
                  <input type="submit" value="Log In" className="btn text-white btn-block btn-primary"/>

                  <div className="d-flex mt-2 mb-5 align-items-center">
                    <span className="ml-auto"><Link to="/signup" className="forgot-pass">Create a new account ?</Link></span> 
                  </div>

                  <span className="d-block text-left my-4 text-muted"> or continue using...</span>
                  
                    <SocialAuth />

                </form>

                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Signin;
