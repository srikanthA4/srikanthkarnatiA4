/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            <span>Hi, I'm </span>
            <span>Srikanth karnati</span>
          </h3>
          {/* <h3></h3> */}
          <p>
            <Typewriter
              options={{
                strings: [
                  "I'm a MERN Stack Developer",
                  
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <a
            className="btn"
            href="https://drive.google.com/file/d/13Ah6TlH-noVnPMA1EZpfNSZAKn0siqrp/view?usp=sharing"
            target="_blank"
          >
             Resume
          </a>
        </div>

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
      </section>
    </>
  );
};

export const Party = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
`;
