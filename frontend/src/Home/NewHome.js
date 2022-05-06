import React, { useState } from "react";
import "../Scrollbar.css";
import "./NewHome.css";
import Header from "../Header/Header";
import ProfilePicture from "../Spring/Home/ProfilePicture";
import slack from "../Images/SlackEditTrans3.png";
import Skills from "../Spring/Home/Skills/Skills.js";
import LeftArrow from "../Spring/Home/Arrow/LeftArrow.js";
import RightArrow from "../Spring/Home/Arrow/RightArrow.js";
import Title from "../Spring/Home/Title/Title.js";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import { Link } from "react-scroll";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const [picture, setPicture] = useState(false);

  const [open, set] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <>
      <div className="border" id="home">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className={sidebar ? "darken" : "bright"}>
          {/* <div className={open ? "moveHome" : "HomeBackground"}> */}
          <div className="ZeroHeader"></div>
          <div className="HomeBackground">
            <div className="NewPosition">
              <img src={slack} />
              <div className="IntroductionWidth">
                <div className="IntroductionText">
                  <div>
                    <h1>Brandon Cox</h1>
                    <Title />
                    <div className="IntroductionP">
                      <p>Im a Web Developer from Boulder, Colorado. I specialize in JavaScript and React development and have a passion for creating/designing frontend applications.</p>
                    </div>
                  </div>
                  <div className="SliderFlex">
                    <Slider />
                  </div>
                </div>
                <div className="SkillsText">
                  <Skills open={open} set={set} />
                  <div className="SkillsPadding">
                  <Link
                      to="contact"
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                    <button>
                      <p>Contact Me</p>
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About />
          <Contact />
        </div>
        <Footer />
      </div>

      {/* <div className="newBorder" id="home">
        <div>
            <Header sidebar={sidebar} setSidebar={setSidebar} /></div>
        <div className="profileFlex">
          <div>
            <img className="backProfile" src={slack2} />
            <img className="newProfile" src={slack} />
            <img className="zeroProfile" src={slack} />
          </div>
          <div className="HomeBackground">
          <div className="IntroductionText">
                      <div>
                        <h1>Brandon Cox</h1>
                        <div>
                          <p>
                            I'm a Frontend Developer from Boulder, Colorado.
                          </p>
                          <p>
                            I specialize in JavaScript and React development
                          </p>
                          <p>and have a passion for creating/designing </p>
                          <p>frontend applications.</p>
                        </div>
                      </div>
                    </div>
          </div>
          
        </div>
        <About />
        <Contact />
      </div> */}
    </>
  );
}
