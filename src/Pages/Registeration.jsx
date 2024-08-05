import React, { useState } from "react";

export default function Registeration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <form
        className={`row g-3 needs-validation ${
          validated ? "was-validated" : ""
        }`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose...
            </option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
            <option>Andaman and Nicobar Islands</option>
            <option>Chandigarh</option>
            <option>Dadra and Nagar Haveli and Daman and Diu</option>
            <option>Delhi</option>
            <option>Lakshadweep</option>
            <option>Puducherry</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="agree">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
