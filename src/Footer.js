import React, { useState } from "react";
import "./FooterStyles.css";

function Footer() {
  return (
    <section className="footer">
      <div className="top">
        <nav>
          <a
            href="https://github.com/mkotik/nasa-photo-of-the-day/tree/marat-kotik"
            target="_blank"
          >
            Repository
          </a>
          <p> | </p>
          <a href="https://github.com/mkotik" target="_blank">
            Github
          </a>
          <p> | </p>
          <a href="https://www.linkedin.com/in/maratkotik/" target="_blank">
            Linkedin
          </a>
        </nav>
      </div>
      <div className="bottom">
        <h3 className="copywrite">© Marat Kotik</h3>
      </div>
    </section>
  );
}

export default Footer;
