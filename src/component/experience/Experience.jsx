import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <h5>WHat Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>MangoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
