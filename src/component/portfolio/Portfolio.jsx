import React from 'react';
import './Portfolio.css';
import d1 from '../../assect/download1.jpg';
import d2 from '../../assect/download2.jpg';
import d3 from '../../assect/download3.jpg';
import d4 from '../../assect/download4.jpg';
import d5 from '../../assect/download5.jpg';
import d6 from '../../assect/download6.jpg';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d1} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>

        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d2} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>

        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d3} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>

        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d4} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>

        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d5} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>

        <div className="portfolio-item-cta">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={d6} alt="porfolio-imag" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a
              href="https://abusameergame.netlify.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies
            </a>
            <a
              href="https://ayaweb.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
