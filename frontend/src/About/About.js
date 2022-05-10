import React, { useState } from "react";
import "../Scrollbar.css";
import "./About.css";
import ProgressBar from "./ProgressBarComp";
import Thinkful from "../Images/ThinkfulWhiteTrans.png";
import bnb from "../Images/ThinkfulbnbAbout.png";
import ThinkfulCapstone from "../Images/ThinkfulCapstoneEdit1.png";
import Flashcard from "../Images/FlashcardEditSize.png";

export default function About() {
  const [sidebar, setSidebar] = useState(false);
  const myRef = document.querySelector(".scrollable-div");

  return (
    <>
      <div className="AboutBorder">
        <div className="AboutBackground" id="about">
          <div className="aboutFlex">
            <div className="EducationBorder">
              <div className="EducationTitle">
                <div className="EducationHR">
                  <h1>Education</h1>
                  <hr />
                </div>
              </div>
              <div></div>
              <div className="EducationFlex">
                <div className="ThinkfulFlex">
                  <div className="MobileImgBorder">
                    <img className="thinkful" src={Thinkful} />
                  </div>
                  <div className="ThinkfulText">
                    <p className="MobileHeadline">Coding Bootcamp: 2021</p>
                    <p>
                      Centered and formatted around full-stack web development
                    </p>
                    <div className="MobilePadding">
                      <p>
                        Javascript, React, CSS, HTML, PostgreSQL, Express.js,
                        Knex.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projects" className="LinkFix"></div>
              <div className="cardFlex">
                <div className="bnbCard">
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href="https://brandonscottcox.github.io/starter-thinkfulbnb/"
                  >
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
                  </a>
                </div>
                <div className="capstoneCard">
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href="https://bcox-front-reservation.herokuapp.com/dashboard"
                  >
                    <div>
                      <img src={ThinkfulCapstone} />
                    </div>
                    <div className="cardText">
                      <p className="cardTitle">Final Capstone</p>
                      <p className="cardP">
                        Restaurant reservation application, utilizing HTTP API.
                      </p>
                      <p className="cardP">
                        Technologies: React.js, Node.js, PostgreSQL, Express.js,
                        & Knex.js
                      </p>
                    </div>
                  </a>
                </div>
                <div className="FlashcardCard">
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href="https://github.com/brandonscottcox/Project_Flashcard"
                  >
                    <div>
                      <img src={Flashcard} />
                    </div>
                    <div className="cardText">
                      <p className="cardTitle">Flashcard-O-Matic</p>
                      <p className="cardP">
                        Card based application, using bootstrap styling.
                      </p>
                      <p className="cardP">
                        Technologies: React.js, Bootstrap, CSS
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="aboutSkillsFlex">
                <div className="aboutSkillsTitle">
                  <h1>Skills</h1>
                </div>
                <div className="center">
                <div className="box">
                  <ProgressBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
