
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { username, email, phone, password } = formData;

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
      console.log("Request Sent:", formData); // Log the data being sent
      const { data } = await axios.post(
        `http://localhost:4000/api/register`, // Ensure this matches the correct URL
        formData,
        { withCredentials: true }
      );
      console.log("Response from backend:", data); // Log the response from the backend

      const { success, message } = data;
      if (success) {
        showToast(message, "success");
        window.location.href = "http://localhost:3000"; // Use this for redirection
      } else {
        showToast(message, "error");
      }
    } catch (error) {
      console.error("Signup error:", error);
      showToast(error.response?.data?.message || "An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="signup-container">
      <img
        src="media/images/homeHero.png"
        alt="Zerodha Hero"
        className="hero-image"
      />
      <h1 className="form-title">Signup to Zerodha</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
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
        <button type="submit" className="btn-submit">Signup</button>
        <span className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>//adddd
  );
};

export default Signup;