import React, { useState } from "react";
import "../Scrollbar.css";
import "./About.css";
import ProgressBar from "react-animated-progress-bar";
import ReactIMG from "../Images/ReactTrans.png";
import CSSIMG from "../Images/CSSTrans.png";
import JSIMG from "../Images/JavaScriptTrans.png";
import HTMLIMG from "../Images/HTMLTrans.png";
import Thinkful from "../Images/ThinkfulWhiteTrans.png";

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
                  <h1>React</h1>
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
                  <h1>CSS</h1>
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
                  <h1>JavaScript</h1>
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
                  <h1>HTML</h1>
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
              <h1>Education</h1>
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
              <p>Coding Bootcamp:</p>
              <p>Centered and formatted around full-stack web development.</p>
              <p>Javascript, React, CSS, HTML, Express.js, Git</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
