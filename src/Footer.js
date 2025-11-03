import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h4>About</h4>
          <p>
            A secure platform for refugees to establish and manage their digital identity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/register")}>Register</li>
            <li onClick={() => navigate("/help")}>Help Center</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="mailto:support@refugeeidentity.org">
                support@refugeeidentity.org
              </a>
            </li>
            <li>+1-800-REFUGEE</li>
            <li onClick={() => navigate("/admin")}>Admin Login</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Refugee Identity Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
