import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import server from "../environment";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const { phone, password } = formData;
  const navigate = useNavigate(); // For redirection after successful login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const showToast = (message, type) => {
    type === "success"
      ? toast.success(message, { position: "bottom-right" })
      : toast.error(message, { position: "bottom-left" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Login Request Sent:", formData); // Log the data being sent
      const { data } = await axios.post(
        `http://localhost:4000/api/login`, // Correct way to include the server URL
        formData,
        { withCredentials: true }
      );

      console.log("Response from backend:", data); // Log the response from the backend

      const { success, message } = data;
      if (success) {
        showToast(message, "success");
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard after successful login
        }, 1000);
      } else {
        showToast(message, "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast(error.response?.data?.message || "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="login-container">
      <img
        src="media/images/homeHero.png"
        alt="Zerodha Hero"
        className="hero-image"
      />
      <h1 className="form-title">Login to Zerodha</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Login</button>
        <span className="signup-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
