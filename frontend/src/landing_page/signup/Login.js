import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`); // Debugging log
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Display error toast
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  // Display success toast
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form with:", { email, password }); // Debugging log
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/login", // Ensure this endpoint is correct
        { email, password }, // Send only email and password
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.open("http://localhost:3001", "_self"); // Redirect after success
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      handleError(error.response?.data?.message || "An error occurred. Please try again.");
    }
    // Remove this to prevent clearing input values
    // setInputValue({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="form_container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required // Make field required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required // Make field required
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
