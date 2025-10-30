import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">PathToken</h1>
        <div className="nav-buttons">
          <button className="lang-btn">English</button>
          <button className="login-btn">Login</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Your Identity, Secured Digitally</h2>
          <p>
            Identity with Dignity. Access for a New Life.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Login</button>
          </div>
        </div>
        <div className="hero-image">
        </div>
      </section>

      {/* Why Digital Identity Matters */}
      <section className="why">
        <h3>Why Digital Identity Matters</h3>
        <p>
          Access to essential services, education, healthcare, and employment
          opportunities begins with a verified identity.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <div className="icon">🔒</div>
          <h4>Secure & Private</h4>
          <p>Blockchain Encryption for the highest level of security for secure identity.</p>
        </div>
        <div className="feature">
          <div className="icon">🌍</div>
          <h4>Accessible Anywhere</h4>
          <p>Access your identity from any device, anytime.</p>
        </div>
        <div className="feature">
          <div className="icon">💬</div>
          <h4>24/7 Support</h4>
          <p>Multilingual assistance whenever you need it.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how">
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
      </footer>
    </div>
  );
}

export default App;
