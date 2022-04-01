import React, { useState } from "react";
import "../Scrollbar.css";
import "./About.css";
import ProgressBar from "react-animated-progress-bar";
import ReactIMG from "../Images/ReactTrans.png";
import CSSIMG from "../Images/CSSTrans.png";
import JSIMG from "../Images/JavaScriptTrans.png";
import HTMLIMG from "../Images/HTMLTrans.png";
import Thinkful from "../Images/ThinkfulWhiteTrans.png";
import bnb from "../Images/ThinkfulbnbAbout.png";
import ThinkfulCapstone from "../Images/ThinkfulCapstoneEdit1.png";
import Flashcard from "../Images/FlashcardEditSize.png";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const myRef = document.querySelector(".scrollable-div");

  return (
    <>
      <div className="AboutBackground" id="about">
        <div className="aboutFlex">
          <div className="aboutSkillsTitle">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="aboutFlex">
          <div className="box">
            <div>
              <div className="skillsImgFlex">
                <div className="ReactIMGFlex">
                  <img className="ReactIMG" src={ReactIMG} />
                  <h1  className="ReactText">React</h1>
                </div>
              </div>
              <div className="ProgressBar">
                <ProgressBar
                  width="300px"
                  height="10px"
                  rect
                  fontColor="azure"
                  percentage="70"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#333333"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="CSSTitle">
              <div className="skillsImgFlex">
                <div className="ReactIMGFlex">
                  <img className="CSSIMG" src={CSSIMG} />
                  <h1 className="CSSText">CSS</h1>
                </div>
              </div>
              <div className="ProgressBar">
                <ProgressBar
                  width="300px"
                  height="10px"
                  rect
                  fontColor="azure"
                  percentage="75"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#333333"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="JavaScriptTitle">
              <div className="skillsImgFlex">
                <div className="ReactIMGFlex">
                  <img className="JSIMG" src={JSIMG} />
                  <h1 className="JSText">JavaScript</h1>
                </div>
              </div>
              <div className="ProgressBar">
                <ProgressBar
                  width="300px"
                  height="10px"
                  rect
                  fontColor="azure"
                  percentage="60"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#333333"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="HTMLTitle">
              <div className="skillsImgFlex">
                <div className="ReactIMGFlex">
                  <img className="HTMLIMG" src={HTMLIMG} />
                  <h1 className="HTMLText">HTML</h1>
                </div>
              </div>
              <div className="ProgressBar">
                <ProgressBar
                  width="300px"
                  height="10px"
                  rect
                  fontColor="azure"
                  percentage="85"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#333333"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="aboutTextFlex">
          <div>
            <p>
              I've spent the past two years coding as a web developer and have
              acquired profficient knowledge in
            </p>
            <p> frontend technologies such as React, CSS, and HTML.</p>
          </div>
        </div>
        <div>
          <div className="aboutFlex">
            <div className="EducationTitle">
              <h1 id="projects">Education</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="EducationFlex">
          <div className="ThinkfulFlex">
            <div>
              <img className="thinkful" src={Thinkful} />
            </div>
            <div>
              <p>Coding Bootcamp: 2021</p>
              <p>Centered and formatted around full-stack web development</p>
              <p>
                Javascript, React, CSS, HTML, PostgreSQL, Express.js, Knex.js,
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="cardFlex">
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://brandonscottcox.github.io/starter-thinkfulbnb/"
          >
            <div className="bnbCard">
              <div>
                <img src={bnb} />
              </div>
              <div className="cardText">
                <p className="cardTitle">Thinkfulbnb</p>
                <p className="cardP">
                  Frontend vacation rental application, focused around css
                  styling
                </p>
                <p className="cardP">Technologies: React.js, CSS, HTML</p>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://bcox-front-reservation.herokuapp.com/dashboard"
          >
            <div className="capstoneCard">
              <div>
                <img src={ThinkfulCapstone} />
              </div>
              <div className="cardText">
                <p className="cardTitle">Final Capstone</p>
                <p className="cardP">
                  Restaurant reservation application, utilizing HTTP API.
                </p>
                <p className="cardP">
                  Technologies: React.js, Node.js, PostgreSQL, Express.js, &
                  Knex.js
                </p>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://github.com/brandonscottcox/Project_Flashcard"
          >
            <div className="FlashcardCard">
              <div>
                <img src={Flashcard} />
              </div>
              <div className="cardText">
                <p className="cardTitle">Flashcard-O-Matic</p>
                <p className="cardP">
                  Card based application, using bootstrap styling.
                </p>
                <p className="cardP">Technologies: React.js, Bootstrap, CSS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
