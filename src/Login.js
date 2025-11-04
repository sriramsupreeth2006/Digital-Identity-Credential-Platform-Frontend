import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple example validation (replace this with your logic or API later)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">PathToken</h1>
        <div className="nav-buttons">
          <button className="lang-btn">English</button>
          <button className="login-btn" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </header>

      {/* Login Box */}
      <div className="login-container">
        <div className="login-box">
          <div className="login-icon">🔒</div>
          <h3>Welcome Back</h3>
          <p>Login to access your digital identity</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />{" "}
                Remember me
              </label>
              <button
              type="button"
              className="forgot-link"
              onClick={() => navigate("/reset-password")}
              >
                Forgot password?
              </button>

            </div>

            <button type="submit" className="primary-btn full-width">
              Login
            </button>
          </form>

          <div className="encryption-note">
            <span>🔐 Your connection is encrypted and secure</span>
          </div>

          <div className="login-footer">
            <p>
              Don’t have an account?{" "}
              <button
                type="button"
                className="register-link"
                onClick={() => navigate("/register")}
              >
                Register here
              </button>
            </p>
            <p>
              Need assistance?{" "}
              <a href="#" className="help-link">
                Visit Help Center
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
