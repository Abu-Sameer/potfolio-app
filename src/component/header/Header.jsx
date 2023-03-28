import React from 'react';
import Cta from './Cta';
import './Header.css';
import User from '../../assect/pro.jpg';
import HeaderSocial from './HeaderSocial';

export default function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello</h5>
        <h1>ADESOYE Y.A</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={User} alt="profile-pic" />
        </div>
        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
}
