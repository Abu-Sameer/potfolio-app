import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <a href="#home" className="footer-logo">
        Adesoye Yusuf Abolaji <br />
        (Abu-Sameer)
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a> <i className="fa-solid fa-house"></i>
        </li>
        <li>
          <a href="#about">About</a>
          <i className="fa-regular fa-user"></i>
        </li>
        <li>
          <a href="#experience">Experience</a>{' '}
          <i className="fa-solid fa-book"></i>
        </li>
        <li>
          <a href="#service">Services</a>{' '}
          <i class="fa-solid fa-network-wired"></i>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
          <i className="fa-solid fa-folder-open"></i>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
          <i className="fa-solid fa-comments"></i>
        </li>
        <li>
          <a href="#contact">Contact</a>
          <i className="fa-regular fa-message"></i>
        </li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Adesoye Code. All rights reserved.</small>
      </div>
    </footer>
  );
}
