import React, { useState } from "react";
import "../Scrollbar.css";
import "./Home.css";
import Header from "../Header/Header";
import slack from "../Images/SlackEditTrans3.png";
import Skills from "../Spring/Home/Skills/Skills.js";
import Title from "../Spring/Home/Title/Title.js";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Link } from "react-scroll";
import * as AiIcons from "react-icons/md";
import { IconContext } from "react-icons";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);

  const [open, set] = useState(false);

  return (
    <>
      <div className="border" id="home">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className={sidebar ? "darken" : "bright"}>
          <div className="ZeroHeader"></div>
          <div className="HomeBorder">
            <div className="HomeBackground">
              <div className="NewPosition">
                  <img src={slack} />
                  <div className="IntroductionWidth">
                    <div className="IntroductionText">
                      <div>
                        <h1>Brandon Cox</h1>
                        <Title />
                        <div className="IntroductionP">
                          <p>
                            Im a Web Developer from Boulder, Colorado. I
                            specialize in JavaScript and React development and
                            have a passion for creating/designing frontend
                            applications.
                          </p>
                        </div>
                      </div>
                      <div className="sliderFlex"></div>
                    </div>
                    <div className="SkillsText">
                      <div>
                        <Skills open={open} set={set} />
                      </div>
                      <div className="SkillsPadding">
                        <div>
                          <Link
                            to="contact"
                            smooth={true}
                            offset={0}
                            duration={700}
                          >
                            <div className="ContactButton">
                              <button>
                                <p className="ContactButtonText">Contact Me</p>
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="socialsBar"></div>
                </div>
            </div>
          </div>
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
