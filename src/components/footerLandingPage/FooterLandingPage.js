import React from "react";
import { Link } from "react-router-dom";
import "./FooterLandingPage.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_section">
        <div className="footer_header">
          <p className="logoHeading">
            Say<span className="IT">IT</span>
          </p>
        </div>
        <div>
          <div className="footerLinkDocs">
            <Link to="/contact">Contact Us</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms and Conditions</Link>
            <Link to="/follow">Follow us</Link>
          </div>
        </div>
      </div>
      <p className="copyright">
        ©2022. All rights Reserved | Designed by Tech Stars
      </p>
    </footer>
  );
};

export default Footer;
