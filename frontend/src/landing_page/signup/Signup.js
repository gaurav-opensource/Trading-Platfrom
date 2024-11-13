// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// const Signup = () => {
//     const navigate = useNavigate();
//     const [inputValue, setInputValue] = useState({
//         name: "",
//         email: "",
//         password: "",
//         username: "",
//     });
//     const { name, email, password, username } = inputValue;

//     // Handle input changes
//     const handleOnChange = (e) => {
//         const { name, value } = e.target;
//         setInputValue((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     // Display error toast
//     const handleError = (err) => {
//         toast.error(err, {
//             position: "bottom-left",
//         });
//     };

//     // Display success toast
//     const handleSuccess = (msg) => {
//         toast.success(msg, {
//             position: "bottom-right",
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post(
//                 "http://localhost:4000/api/auth/signup", // Ensure this endpoint is correct
//                 inputValue,
//                 { withCredentials: true }
//             );

//             const { success, message } = data;
//             if (success) {
//                 handleSuccess(message);
//                 // Navigate to the dashboard after a delay
//                 setTimeout(() => {
//                     navigate("/login"); // Ensure this path is correct in your routing setup
//                 }, 1000);
//             } else {
//                 handleError(message);
//             }
//         } catch (error) {
//             console.error("Signup error:", error);
//             handleError(error.response?.data?.message || "An error occurred. Please try again.");
//         }

//         // Reset form fields
//         setInputValue({
//             name: "",
//             email: "",
//             password: "",
//             username: "",
//         });
//     };

//     return (
//         <div className="signup-container">
//             <img
//                 src="media/images/homeHero.png"
//                 alt="Zerodha Hero"
//                 className="hero-image"
//             />
//             <h1 className="form-title">Signup to Zerodha</h1>
//             <form onSubmit={handleSubmit} className="signup-form">
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={name}
//                         placeholder="Enter your name"
//                         onChange={handleOnChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         type="text"
//                         name="username"
//                         value={username}
//                         placeholder="Enter your username"
//                         onChange={handleOnChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         placeholder="Enter your email"
//                         onChange={handleOnChange}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         placeholder="Enter your password"
//                         onChange={handleOnChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn-submit">Signup</button>
//                 <span className="login-link">
//                     Already have an account? <Link to="/login">Login</Link>
//                 </span>
//             </form>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Signup;




import React, { useState } from "react";
import { Link } from "react-router-dom"; // You only need useNavigate if navigating within the same React app
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Signup = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
    });
    const { name, email, password, username } = inputValue;

    // Handle input changes
    const handleOnChange = (e) => {
        const { name, value } = e.target;
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
            position: "bottom-right",
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/auth/signup", // Ensure this endpoint is correct for your backend
                inputValue,
                { withCredentials: true }
            );
            console.log(data)
            const { success, message } = data;
            if (success) {
                window.open("http://localhost:3001", "_self"); 
                handleSuccess(message);
                
               
            } else {
                handleError(message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            handleError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    }
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
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">Signup</button>
                <span className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
