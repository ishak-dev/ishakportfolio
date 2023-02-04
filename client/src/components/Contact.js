import React from "react";
import "../style/contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Get In Touch With Me and Make Connection</h1>
      <p>
        If you want to contact me, and get know me better please go ahead, you
        can conntact me via email:{" "}
        <span>
          <b>ishak.kazic@gmail.com </b>
        </span>
        or use some of the following options:
      </p>
      <div className="contact-categories">
        <a
          href="https://ba.linkedin.com/in/ishak-kazi%C4%87-a760451a8"
          target="_blank"
        >
          <button className="contact-button blue">LinkedIn</button>
        </a>
        <a href="mailto: ishak.kazic@gmail.com">
          <button className="contact-button orange">Email</button>
        </a>
        <a href="https://github.com/ishak-dev" target="_blank">
          <button className="contact-button green">Github</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
