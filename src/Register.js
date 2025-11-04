import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    email: "",
    phone: "",
    location: "",
    documentType: "",
    file: null,
    password: "",
    confirmPassword: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successfully!");
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h2>Create Your Digital Identity</h2>
      <p>All information is encrypted and stored securely</p>

      <div className="progress-container">
        <p>Step {step} of 4</p>
        <progress value={step} max="4" style={{ width: "100%" }}></progress>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="step">
            <h3>Personal Information</h3>
            <label>First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />

            <label>Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />

            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

            <label>Country of Origin</label>
            <input name="country" value={formData.country} onChange={handleChange} />

            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="step">
            <h3>Contact Information</h3>
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />

            <label>Phone Number</label>
            <input name="phone" value={formData.phone} onChange={handleChange} />

            <label>Current Location</label>
            <input name="location" value={formData.location} onChange={handleChange} />

            <div className="buttons">
              <button type="button" onClick={prevStep}>Previous</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="step">
            <h3>Document Verification</h3>
            <label>Document Type</label>
            <input name="documentType" value={formData.documentType} onChange={handleChange} />

            <label>Upload Identity Document</label>
            <input type="file" name="file" onChange={handleChange} />

            <div className="buttons">
              <button type="button" onClick={prevStep}>Previous</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="step">
            <h3>Security & Privacy</h3>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />

            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              I consent to the secure storage of my information
            </label>

            <div className="info-box">
              <p>
                🔐 Your data is protected with military-grade encryption and will never be
                shared without your explicit consent.
              </p>
            </div>

            <div className="buttons">
              <button type="button" onClick={prevStep}>Previous</button>
              <button type="submit">Create Account</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
