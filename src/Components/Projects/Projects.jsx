
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
        <div align="center">
          <h1> Demo Credentials</h1>
          <h2 > User:ksreddy123@gmail.com |paswword:123456</h2>
          <h2> Emart-Admin:admin12@gmail.com|password:123456</h2>
          

          
        </div>

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
                # <a
                #   className="icons-git"
                #   target="_blank"
                #   rel="noreferrer"
                #   href="http://file-storage-mern.vercel.app/"
                # >
                #   <img
                #     style={{ height: "100%", width: "100%" }}
                #     src="/Images/globe-solid.svg"
                #     alt=""
                #   /> 
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with Mongodb,Express,React,Nodejs </h3>
              
              
              <h3>
              This is a web application where you can upload and store your files.  Files can be sorted, filtered and deleted. Saved files can later be downloaded to any of your own devices.</h3>
            </NewDiv>
           
          </div>
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/eem.png?raw=true" alt="" />
            <div className="content">
              <h3>E-mart</h3>

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
                  href="https://github.com/srikanthA4/emart/tree/main/client"
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
                  href="https://github.com/srikanthA4/emart"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                # <a
                #   className="icons-git"
                #   target="_blank"
                #   rel="noreferrer"
                #   href="https://shop-on-emart.herokuapp.com/"
                # >
                #   <img
                #     style={{ height: "100%", width: "100%" }}
                #     src="/Images/globe-solid.svg"
                #     alt=""
                #   /> 
                </a>
              </div>
            </div>
            
            <NewDiv>
              <h3>React.js, node.js  express.js and mondodb</h3>
              <h3>
     
              eMart is your 'one-stop shopping destination'. Shop your favorite brands at a discounted price.
              </h3>
            </NewDiv>
          </div>
          {<div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/connet.png?raw=true" alt="" />
            <div className="content">
              <h3>let-connet</h3>
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
                  href="https://github.com/srikanthA4/let-connet/tree/main/client"
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
                  href="https://github.com/srikanthA4/let-connet"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                # <a
                #   className="icons-git"
                #   href="https://iet-community.herokuapp.com/"
                #   target="_blank"
                #   rel="noreferrer"
                # >
                #   <img
                #     style={{ height: "100%", width: "100%" }}
                #     src="/Images/globe-solid.svg"
                #     alt=""
                #   /> 
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>
                Built with Mongodb,Express,React,Nodejs .
              </h3>
            
              <h3>
              
    A Web App made with MERN stack, it is basically a combination of LinkedIn and StackOverflow, so that the students of a particular college can interact and get help from fellow batchmates, seniors and alumni
              </h3>
            </NewDiv>
           
          </div>}
          <div className="box">
            <img src="https://github.com/srikanthA4/images/blob/main/cook.png?raw=true" alt="" />
            <div className="content">
              <h3>cookdetails</h3>
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
                  href="https://github.com/srikanthA4/cookdetails-frontend"
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
                  href="https://github.com/srikanthA4/cookdetails-backend"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://cdn-icons-png.flaticon.com/512/7269/7269982.png"
                    alt=""
                  />
                </a>
                # <a
                #   className="icons-git"
                #   href="https://cookdetails.vercel.app/"
                #   target="_blank"
                #   rel="noreferrer"
                # >
                #   <img
                #     style={{ height: "100%", width: "100%" }}
                #     src="/Images/globe-solid.svg"
                #     alt=""
                #   /> 
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>HTML,CSS,Bootstrap,Nodejs,Expressjs,MONGODB.</h3>
             
              <h3> About A cookdetails . Created to add, edit, read, delete recipes to maintain a database and description abook cook foor details.</h3>
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
                # <a
                #   className="icons-git"
                #   target="_blank"
                #   rel="noreferrer"
                #   href="https://superlative-hamster-93e7e6.netlify.app/"
                # >
                #   <img
                #     style={{ height: "100%", width: "100%" }}
                #     src="/Images/globe-solid.svg"
                #     alt=""
                #   /> 
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
