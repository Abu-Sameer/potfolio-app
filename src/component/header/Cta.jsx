import React from 'react';
import CV from '../../assect/CV.pdf';

export default function Cta() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a
        href="https://adesoyeprofile.netlify.app"
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        MyBio
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
}
