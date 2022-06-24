/** @format */
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
            <img src=" https://github.com/srikanthA4/images/blob/main/cloud.png?raw=true " alt="" />
            <div className="content">
              <h3>file storage cloud</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/file-storage-mern"
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
                  href="https://github.com/srikanthA4/file-storage-server"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="http://file-storage-mern.vercel.app/"
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
              <h2><u>Credentials</u></h2>
              <h2>Admin:filestorage@gmail.com</h2>
              <h2>password:1234</h2>
              
              <h3>
              This is a web application where you can upload and store your files.Files can be sorted, filtered,deleted and dowload.</h3>
            </NewDiv>
           
          </div>
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/call.png?raw=true" alt="" />
            <div className="content">
              <h3>meet buddy</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/let-meet-buddy-frontend"
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
                  href="https://github.com/srikanthA4/let-meet-buddy-backend"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="http://let-meet-buddy.vercel.app/"
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
              <h3>React.js, Socket.io and Peer.js</h3>
              <h3>
                 meet buddy is a app which is used to make video call and make fun with buddies
              </h3>
            </NewDiv>
          </div>
          {<div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/digitalbay.png?raw=true" alt="" />
            <div className="content">
              <h3>Digitalbay</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/srikanthA4/Digitalbay-client"
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
                  href="https://github.com/srikanthA4/Digitalbay-server"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://digitalbay-client.vercel.app/"
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
            <h2>Credentials</h2>
            <h2>Admin:admin@ecommcapstone.com</h2>            
            <h2>User:user@ecommcapstone.com</h2>
            <h2>Password:1234</h2>
              <h3>An app called Digitalbay is a simple eccomerce application .
              </h3>
            </NewDiv>
           
          </div>}
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/postshare.png?raw=true" alt="" />
            <div className="content">
              <h3>Post App</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "60%",
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
                  href="https://github.com/srikanthA4/post-share-backend"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://postshare.netlify.app/"
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
              <h3>HTML,CSS,Bootstrap,Nodejs,Expressjs,MONGODB.</h3>
              <h2>Credentails</h2>
              <h2>User:postshare@gmail.com</h2>
              <h2>password:1234</h2>
              <h3>  A  Post share is a simple social media application with users, posts, likes and comments.</h3>
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
                  width: "60%",
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
