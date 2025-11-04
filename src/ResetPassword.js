import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert("A password reset code has been sent to your email!");
  };

  return (
    <div className="reset-page">
      <div className="reset-container">
        <div className="reset-header">
          <div className="reset-icon">🛡️</div>
          <h2>Reset Password</h2>
          <p>We'll help you recover your account</p>
        </div>

        <div className="reset-box">
          <div className="email-icon">📧</div>
          <h3>Enter Your Email</h3>
          <p>Enter the email address associated with your account</p>

          <form onSubmit={handleReset}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="primary-btn full-width">
              Send Reset Code
            </button>
          </form>

          <div className="encryption-note">
            🔐 Your information is encrypted and secure
          </div>
        </div>

        <div className="back-login">
          <button onClick={() => navigate("/")} className="back-btn">
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
