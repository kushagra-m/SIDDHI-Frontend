import React from "react";
import { useState } from "react";
import './SignupForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAt } from "react-icons/fa";


const SignupForm = () => {

  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the registration logic (e.g., API call)
    setIsRegistered(true);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaAt className="icon" />
          </div>

          <div className="input-box">
            <input type="text" placeholder="First name" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Last name" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div> */}

          <button type="submit">Register</button>

          {/* <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div> */}

        {isRegistered && <p className="success-message">Registered successfully! Please proceed to the login page and login</p>}
      </form>
    </div>
  );
}

export default SignupForm;
