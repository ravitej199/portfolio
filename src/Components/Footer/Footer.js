import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title"> Ravitej</h1>

        <ul className="footer_list">
          <li>
            <a href="#" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://github.com/ravitej199"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ravitej-herwatta-b2a6841a5"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
