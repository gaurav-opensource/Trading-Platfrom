import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Login = () => {

  const [inputValue, setInputValue] = useState({
    phone: "", // Change 'email' to 'phone'
    password: "",
  });

  const { phone, password } = inputValue;

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
      console.log("Submitting form with:", { phone, password }); // Debugging log

      // Ensure phone number is not empty
      if (!phone || !password) {
        handleError("Phone number and password are required!");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:4000/api/login", // Update to your hosted URL
        { phone, password },
        { withCredentials: true }
      );

      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.open("https://trading-platfrom-dashborad.onrender.com/", "_self"); // Redirect after success to dashboard
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);

      // Handling network or unexpected error
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      handleError(errorMessage);
    }
  };

  return (
    <div className="form_container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phone">Phone</label> {/* Updated label */}
          <input
            type="tel" // Changed to 'tel' to allow flexible phone number formats
            name="phone" // Updated name to 'phone'
            value={phone}
            placeholder="Enter your phone number"
            onChange={handleOnChange}
            required
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
            required
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
