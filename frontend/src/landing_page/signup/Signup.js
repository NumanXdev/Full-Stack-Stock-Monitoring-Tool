import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", inputValue);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
      username: "",
    });
  };

  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row w-100">
       
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid"
            src="media/images/signup.png"
            alt="Signup"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <div
            className="card shadow p-3 w-100"
            style={{
              maxHeight: "450px", // Reducing the vertical height of the form
            }}
          >
            <h2 className="text-primary text-center mb-3">Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
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

              <div className="mb-2">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-2">
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

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Submit
              </button>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;