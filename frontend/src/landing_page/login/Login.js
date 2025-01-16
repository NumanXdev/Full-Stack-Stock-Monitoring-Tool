// 8

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
      
        <div className="col-md-5 ">
          <div
            className="card shadow p-4 "
            // style={{
            //   maxHeight: "400px", 
            // }}
          >
            <h2 className="text-primary text-center mb-3">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>

              <button type="submit" className="btn btn-primary  mt-2">
                Submit
              </button>
              <p className="mt-3 text-center">
                Don't have an account?
                 <Link to={"/signup"} className="text-primary ps-1">
                   Signup
                </Link>
              </p>
            </form>
          </div>
        </div>

       
        <div className="col-md-7 ">
          <img
            className="img-fluid d-none d-md-block ms-2 "
            src="media/images/signup.png"
            alt="Login"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
