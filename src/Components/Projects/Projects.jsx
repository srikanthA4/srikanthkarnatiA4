/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="heading">
          {" "}
          my <span>projects</span>{" "}
        </h1>

       <div className="box-container">
        <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/postshare.png?raw=true" alt="" />
            <div className="content">
              <h3>post share</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/post-share-frontend"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://postshare.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with Mongodb,Express,React,Nodejs </h3>
              <h3>
              A  Post share is a simple social media application with users, posts, likes and comments</h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/url.png?raw=true" alt="" />
            <div className="content">
              <h3>URL shortener</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/url-shortener-frontend"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://srikantha4url-shortener.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            
            <NewDiv>
              <h3>HTML,CSS,Bootstrap,Nodejs,Expressjs,MONGODB</h3>
              <h3>
              URL shortener it is full stack application that allows users to shorten long URL</h3>
            </NewDiv>
          </div>
          {<div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/aMAZON%20CLONE.png?raw=true" alt="" />
            <div className="content">
              <h3>Amazon clone</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/amazonclone"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="http://amazonclone-phi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>
                Built with Mongodb,Express,React,Nodejs .
              </h3>
              <h3>
              
    An app called Amazon clone  with Fully Functioning AMAZON CLONE Website with Stripe Payment Gateway and Firebase Hoisting
              </h3>
            </NewDiv>
          </div>}
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/wea.png?raw=true" alt="" />
            <div className="content">
              <h3>Weather-app</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/weather-app"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://sriweatherapp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with HTML, Javascript, CSS.</h3>
              <h3>This project is done to check 7 days weather-Details of a city.</h3>
            </NewDiv>
          </div>

          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/tranlator.png?raw=true" alt="" />
            <div className="content">
              <h3>Translation-app</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/srikanthA4/translator-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://superlative-hamster-93e7e6.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with HTML, CSS, Javascript</h3>
         <h3>
       
This project is done to translate  any national language.
           </h3>     
            </NewDiv>
          </div>
          
        </div>
      </section>
    </>
  );
};

const NewDiv = styled.div`
  height: 15rem;
  width: 100%;
  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    padding: 1rem 1rem;
  }
`;

