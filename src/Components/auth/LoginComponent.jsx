import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({ username, password })
    });
    const signupdata = await res.json();
    localStorage.setItem("mylogintoken", signupdata.token)
    navigate('/')
    setPassword("")
    setUsername("")
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form className="bg-light p-4 rounded" onSubmit={loginHandler}>
                <h1 className="text-center">LOGIN</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your details with anyone else.
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <label
                  className="form-check-label my-3"
                  htmlFor="exampleCheck1"
                >
                  <Link to={"/Signup"}>Create Account</Link>
                </label>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
