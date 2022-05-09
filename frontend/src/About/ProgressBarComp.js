import * as React from "react";
import "./About.css";
import ProgressBar from "react-animated-progress-bar";
import ReactIMG from "../Images/ReactTrans.png";
import CSSIMG from "../Images/CSSTrans.png";
import JSIMG from "../Images/JavaScriptTrans.png";
import HTMLIMG from "../Images/HTMLTrans.png";

export default function ProgressBarComp({ width, percent }) {
  return (
    <>
      <div>
        <div className="skillsImgFlex">
          <div className="ReactIMGFlex">
            <img className="ReactIMG" src={ReactIMG} />
            <h1 className="ReactText">React</h1>
          </div>
        </div>
        <div className="ProgressBar">
          <ProgressBar
            width="14vw"
            height="1vh"
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
            width="14vw"
            height="1vh"
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
            width="14vw"
            height="1vh"
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
      <div className="HTMLTitle">
        <div className="skillsImgFlex">
          <div className="ReactIMGFlex">
            <img className="HTMLIMG" src={HTMLIMG} />
            <h1 className="HTMLText">HTML</h1>
          </div>
        </div>
        <div className="ProgressBar">
          <ProgressBar
            width="14vw"
            height="1vh"
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
    </>
  );
}
