import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <i className="fa-regular fa-user"></i>
      </a>
      <a
        href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <i className="fa-solid fa-book"></i>
      </a>
      <a
        href="#service"
        onClick={() => setActive('#service')}
        className={active === '#service' ? 'active' : ''}
      >
        <i className="fa-solid fa-screwdriver-wrench"></i>
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <i className="fa-regular fa-message"></i>
      </a>
    </nav>
  );
}
