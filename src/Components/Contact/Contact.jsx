/** @format */

import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export const Contact = () => {
  const sendEmail = (e) => {
    console.log(e.traget);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_s6y22i9",
        "template_xpewggp",
        e.target,
        "hSup_Noykt0YF1j1H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> me{" "}
          <div className="share">

           
          <a
            href="https://github.com/srikanthA4"
            target="_blank"
            rel="noreferrer"
            className="fab fa-github"
          ></a>
           
          <a
            target="_blank"
            href="https://www.linkedin.com/in/srikanth-reddy-4a7747231/"
            rel="noreferrer"
            className="fab fa-linkedin"
          ></a>
         
             <a
            target="_blank"
            href="mailto:ksreddy5a4@gmail.com"
            rel="noreferrer"
            className="fa fa-envelope"
          ></a>




        






        </div>
        </h1>

        <form action="" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            className="box"
            name="user_name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="box"
            name="user_email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="box"
            name="subject"
          />
          <textarea
            name="message"
            className="box"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
      
     
    </>
  );
};
