import React from 'react';
import './About.css';
import User from '../../assect/pro.jpg';

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={User} alt="Mine" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-card">
            <article className="about-cards">
              <i className="fa-solid fa-award"></i>
              <h5>Experience</h5>
              <small>+3 Years Working</small>
            </article>

            <article className="about-cards">
              <i className="fa-solid fa-users"></i>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about-cards">
              <i className="fa-solid fa-briefcase"></i>
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            excepturi blanditiis a saepe quisquam error magni ipsa placeat?
            Laboriosam facilis obcaecati quasi ex nostrum perferendis cupiditate
            debitis illum voluptate quia!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
