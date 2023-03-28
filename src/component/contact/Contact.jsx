import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xhzyn19',
      'template_sjxpi6k',
      form.current,
      'UnBzIYmsFpQ2Hb86w'
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <i className="fa-regular fa-envelope"></i>
            <h4>Email</h4>
            <h5>adesoyeabolajiyusuph@gmail</h5>
            <a
              href="mailto:adesoyeabolajiyusuph@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
          <article className="contact-option">
            <i className="fa-brands fa-facebook-messenger"></i>
            <h4>Messenger</h4>
            <h5>Adesoyeabusameer</h5>
            <a
              href="https://m.me/Adesoyeabumahrosh/"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
          <article className="contact-option">
            <i className="fa-brands fa-whatsapp"></i>
            <h4>WhatsApp</h4>
            <h5>814-0534-229</h5>
            <a
              href="https://wa.me/08140534229"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
