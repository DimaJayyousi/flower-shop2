import React, { useState } from 'react';
import './CSS/login-signup.css'; // Make sure this path is correct!

const Login = () => {
   const [state, setState] = useState("login"); // "login" or "signup"

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const login = async () => {
    console.log("Login function executed",formData);
    try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      }),
    });

    const responseData = await response.json();
    console.log("Backend Response:", responseData);

    if (responseData.success) {
      alert("Welcome back 👋");
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      if (responseData.errors) {
        alert("Login failed: " + responseData.errors);
      } else {
        alert("Login failed. Please try again.");
      }
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed due to a network or server error 😢");
  }
  };

const signup = async () => {
  console.log("Signup function executed", formData);

  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    console.log("Backend Response: ", responseData); // Add this line

    if (responseData.success) {
      alert("You signed in successfully 🎉");
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/"); 
    } else {
      if (responseData.errors) {
        if (responseData.errors === "existing user found with same email address") {
          alert("Oops! This email is already in use. Please try logging in instead.");
        } else {
          alert("Signup failed: " + responseData.errors);
        }
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Something went wrong! Try again later 😢");
  }
};


const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = () => {
    if (state === "signup") {
      console.log("Signup Data:", formData);
      signup(); // Trigger signup logic
    } else {
      console.log("Login Data:", formData);
      login(); // Trigger login logic
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state === "signup" ? "Sign Up" : "Login"}</h1>

        <div className="loginsignup-fields">
          {state === "signup" && (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={() => { state === "login" ? login() : signup() }}>
          Continue
        </button>
        {state === "signup" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("login")}>Log In</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span onClick={() => setState("signup")}>Sign Up</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" id="terms" />
          <p>
            By continuing, I agree to the <a href="#">terms of use</a> &{" "}
            <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
