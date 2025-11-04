import React from "react";
import "./HelpCenter.css";
import { useNavigate } from "react-router-dom";

function HelpCenter() {
  const navigate = useNavigate();

  return (
    <div className="help-center">
      {/* Header Section */}
      <header className="help-header">
        <h1>Help Center</h1>
        <p>How can we help you today?</p>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for help..."
        />
      </header>

      {/* Popular Topics */}
      <section className="popular-topics">
        <h2>Popular Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>📝 Getting Started</h3>
            <p>Learn how to create and verify your digital identity.</p>
          </div>
          <div className="topic-card">
            <h3>🔒 Account Security</h3>
            <p>Protect your account and personal information.</p>
          </div>
          <div className="topic-card">
            <h3>📄 Document Verification</h3>
            <p>Upload and verify your identity documents.</p>
          </div>
          <div className="topic-card">
            <h3>🛡 Privacy & Data</h3>
            <p>Understand how we protect your information.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li>How long does verification take?</li>
          <li>Is my personal information secure?</li>
          <li>What documents do I need?</li>
          <li>Can I access my ID offline?</li>
          <li>How do I update my information?</li>
          <li>What languages are supported?</li>
        </ul>
      </section>

      {/* Contact Support */}
      <section className="contact-support">
        <h2>Contact Support</h2>
        <div className="support-grid">
          <div className="support-card">
            <h3>📧 Email Support</h3>
            <p>Get help via email within 24 hours.</p>
            <a href="mailto:support@refugeeidentity.org">
              support@refugeeidentity.org
            </a>
          </div>
          <div className="support-card">
            <h3>📞 Phone Support</h3>
            <p>Speak with our multilingual support team.</p>
            <a href="tel:+18007338433">+1-800-REFUGEE</a>
          </div>
          <div className="support-card">
            <h3>💬 Live Chat</h3>
            <p>Chat with a support agent in real-time.</p>
            <button className="chat-btn">Start Chat</button>
          </div>
        </div>
      </section>

      {/* ✅ Resources (boxes above footer) */}
      <section className="resources">
        <h2>Resources</h2>
        <div className="resources-grid">
          <button>User Guide</button>
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
          <button>Accessibility</button>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              A secure platform for refugees to establish and manage their
              digital identity.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/register")}>Register</li>
              <li onClick={() => navigate("/help")}>Help Center</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="mailto:support@refugeeidentity.org">
                  support@refugeeidentity.org
                </a>
              </li>
              <li>
                <a href="tel:+18007338433">+1-800-REFUGEE</a>
              </li>
              <li onClick={() => navigate("/admin-login")}>Admin Login</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="footer-bottom">
          © 2025 Refugee Identity Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HelpCenter;
