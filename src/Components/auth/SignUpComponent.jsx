import React from "react";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form className="bg-light p-4 rounded">
                <h1 className="text-center">SIGN UP</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              
                  <label className="form-check-label my-3" htmlFor="exampleCheck1">
                    <Link to = {'/login'}>Login Here</Link>  
                  </label>
              
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
