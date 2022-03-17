import React from "react";
import "./Header.css";
import HeaderLogo from "../Images/HeaderLogo.png";
import Github from "../Images/GithubTrans.png";
import Linkedin from "../Images/LinkedinTrans.png";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

export default function Header({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="Header">
      <IconContext.Provider value={{ color: "#fff", size: "30px" }}>
        <div className="HeaderFlex">
          <div className="HeaderLogoFlex">
            <Link to="#">
              <img src={HeaderLogo} alt="Brandon Cox" onClick={showSidebar} />
            </Link>
          </div>
          <div className="divider"></div>
          <div className="Github">
            <a
              target="_blank"
              href="https://github.com/brandonscottcox"
            >
              <img src={Github} alt="Github" />
            </a>
          </div>
          <div className="Linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brandonscottcox/"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
          <div className="Resume">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/e/2PACX-1vR0Cm55HM7T8cMfl8j_ty4OdwWGqZGmNile81WxBLrYi_YSY2Xoz5CH8RR_JkftYnbgEcu5GRQGClJ6/pub"
            >
              <button>Resume</button>
            </a>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
}
