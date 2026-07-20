import React from "react";
import { IconGithub, IconLinkedin, IconInstagram } from "../icons";

function Footer() {
  return (
    <footer className="app-footer">
      <span>
        Made by <strong>Heet</strong>
      </span>
      <div className="app-footer-links">
        <a href="https://github.com/heet0207" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGithub />
        </a>
        <a href="https://www.linkedin.com/in/heet-chauhan-95313631a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <IconLinkedin />
        </a>
        <a href="https://www.instagram.com/heet.null" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <IconInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
