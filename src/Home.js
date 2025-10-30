import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">PathToken</h1>
        <div className="nav-buttons">
          <button className="lang-btn">English</button>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Your Identity, Secured Digitally</h2>
          <p>
            A trusted platform for refugees to establish, manage, and verify
            their digital identity with dignity and security.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        <div className="hero-image">
        </div>
      </section>

      {/* Why Digital Identity Matters */}
      <section className="why-section">
        <h3>Why Digital Identity Matters</h3>
        <p>
          Access to essential services, education, healthcare, and employment
          opportunities begins with a verified identity.
        </p>
      </section>

      {/* Our Features */}
      <section className="features">
        <h3>Our Features</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">🔒</div>
            <h4>Secure & Private</h4>
            <p>
              Blockchain Encryption for the highest level of security for secure
              identity.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🌍</div>
            <h4>Accessible Anywhere</h4>
            <p>Access your identity from any device, anytime.</p>
          </div>

          <div className="feature-card">
            <div className="icon">💬</div>
            <h4>24/7 Support</h4>
            <p>Multilingual assistance whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <div className="circle">1</div>
            <h4>Register</h4>
            <p>Create your account with basic information.</p>
          </div>
          <div className="step">
            <div className="circle">2</div>
            <h4>Verify</h4>
            <p>Upload required documents for verification.</p>
          </div>
          <div className="step">
            <div className="circle">3</div>
            <h4>Access</h4>
            <p>Use your digital ID to access services.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p></p>
      </footer>
    </div>
  );
}

export default Home;
