import React from 'react'
import img from "../../Assets/images/undraw_file_sync_ot38.svg"
import {Link} from "react-router-dom"

function ForgotPassword() {
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
                <form className='authentication-form' action="#" method="post">

                  <div className="form-group first">
                    <input required type="email" className="form-control" id="email" placeholder='email'/>
                  </div>
    
                  <input type="submit" value="Submit" className="btn text-white btn-block btn-primary"/>

                  <div className="d-flex mt-2 mb-5 align-items-center">
                    <span className="ml-auto"><Link to="/login" className="forgot-pass">Sign in ?</Link></span> 
                  </div>

                </form>

                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default ForgotPassword;
