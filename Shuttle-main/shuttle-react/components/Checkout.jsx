import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    landmark:'',
    zipCode: '',
    city: '',
    state: '',
    country: 'India', // Assuming country is India
  });

  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    // Fetch Indian cities and states data from the API
    axios.get('http://localhost:5000/state')
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('https://api.countrystatecity.in/v1/countries')
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='container'>
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h1 className="h1 mt-4 mb-3 fw-bold">Checkout</h1>
          </div>

          <div className="mb-3">
            <label htmlFor="floatingInput">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="floatingPassword">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="floatingAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="floatingAddress"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="floatingInput">LandMark</label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="fullName"
              value={formData.landmark}
              onChange={handleChange}
            />
          </div>





          <div className="mb-3">
            <label htmlFor="floatingZipCode">Zip code</label>
            <input
              type="text"
              className="form-control"
              id="floatingZipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cityDropdown">City</label>
            <select
              className="form-control"
              id="cityDropdown"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="stateDropdown">State</label>
            <select
              className="form-control"
              id="stateDropdown"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="countryDropdown">Country</label>
            <select
              className="form-control"
              id="countryDropdown"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button className="btn btn-dark w-50 py-2 px-4" type="submit">Proceed</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Checkout;
