import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import {redirect} from "react-router-dom";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      // Send the Google OAuth credential to your server for verification.
      const response = await axios.post('http://localhost:5000/googlelogin', {
        // var decoded = jwt_decode(token);
        googleCredential: jwt_decode(credentialResponse.credential),
      });
      console.log(response)
      if (response.status==200) {
        // Store the token in local storage for future authenticated requests.
        localStorage.setItem('token', response.data.user);
        navigate('/');
      } else {
        alert('Google login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server's login endpoint
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data.message);
      // Check the response to determine if the login was successful
      if (response.data.message) {
        // Redirect the user to the dashboard or another page upon successful login
        // <Link to='/'></Link>
        console.log(response.data);
        localStorage.setItem('token', response.data.user);  // after adding these line code is not executing forward
        console.log("Before Redirecting");
        //  redirect("/");
        navigate("/");

      } else {
        // Handle unsuccessful login (e.g., show an error message)
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h1 className="h1 mt-4 mb-3 fw-bold">Login</h1>
          </div>

          <div className="mb-3">
            <label htmlFor="floatingInput">Email address</label>

            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              value={formData.email}
              onChange={handleChange}
            // placeholder="name@example.com"
            />
            {/* <label htmlFor="floatingInput">Email address</label> */}
          </div>
          <div className="mb-3">
            <label htmlFor="floatingPassword">Password</label>

            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              value={formData.password}
              onChange={handleChange}
            // placeholder="Password"
            />
            {/* <label htmlFor="floatingPassword">Password</label> */}
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-dark w-50 py-2 px-4" type="submit">Sign in</button>
          </div>


          <div className="d-flex justify-content-center mb-3">

            <GoogleOAuthProvider clientId="518084783826-6piqo7bnebc38t14kaepod4vtf5bhcuh.apps.googleusercontent.com">

                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  // {credentialResponse => {
                  //   var decoded = jwt_decode(credentialResponse.credential);
                  //   console.log(decoded);
                  // }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />

            </GoogleOAuthProvider>

          </div>


          <div className="d-flex justify-content-center">
            <Link to='/create'><h4>Create account</h4></Link>
          </div>

        
        </form>
      </main>
    </div>
  );
}

export default Login;
