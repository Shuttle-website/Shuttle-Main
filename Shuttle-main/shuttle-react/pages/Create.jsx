import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Create() {
  // Define state variables for form input values
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const { first_name, last_name, email, password } = formData;

  const handleChange = (e) => {
    // Update the corresponding state field when input changes
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    try {
      // Make an Axios POST request to your backend API
      await axios.post('http://localhost:5000/create', formData).then(res=>{
        if(res.status==201){
          toast("Account created");
          navigate("/login");
        }
      }).catch(err=>{
        console.log(err)
        toast("Email Already Exists");
      });

      // // Handle the response as needed (e.g., show a success message)
      // console.log('Response:', response);
      // if (response.data.message === 'Account created') {
      //   // Display a success toast
      //   console.log(response.data.message);
      //   created
        
      // } else if (response.data.error === 'Email already in use') {
      //   // Display an error toast for existing email
      //   toast("Email already exists");
      //   console.log(response.data.error);

      // } else {
      //   // Handle other responses or errors
      //   console.log('Response:', response.data);
      // }

    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <main className="form-signin w-50 m-auto">
        <form method="post" onSubmit={handleSubmit}>
          <div className="text-center">
            <h1 className="h1 mt-4 mb-3 fw-bold">Sign Up</h1>
          </div>

          <div className="mb-3">
          <label htmlFor="floatingInput">First Name</label>

            <input
              type="text"
              name="first_name"
              className="form-control"
              id="first_name"
              required
              // placeholder="First Name"
              value={first_name}
              onChange={handleChange}
            />
            {/* <label htmlFor="floatingInput">First Name</label> */}
          </div>
          <div className="mb-3">
          <label htmlFor="floatingPassword">Last Name</label>

            <input
              type="text"
              name="last_name"
              className="form-control"
              id="floatingPassword"
              required
              // placeholder="Last Name"
              value={last_name}
              onChange={handleChange}
            />
            {/* <label htmlFor="floatingPassword">Last Name</label> */}
          </div>

          <div className="mb-3">
          <label htmlFor="floatingInput">Email address</label>

            <input
              type="email"
              name="email"
              className="form-control"
              id="floatingInput"
              required
              // placeholder="name@example.com"
              value={email}
              onChange={handleChange}
            />
            {/* <label htmlFor="floatingInput">Email address</label> */}
          </div>
          <div className="mb-3">
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              required
              // placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            
            {/* <label htmlFor="floatingPassword">Password</label> */}
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-dark w-50 py-2 px-4" type="submit">
              Create
            </button>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <Link to='/login' className="btn btn-dark w-50 py-2 px-4">
              Login
            </Link>
          </div>
          <div className="d-flex justify-content-center"></div>
        </form>
      </main>

      <ToastContainer />

    </div>
  );
}

export default Create;
