import React, { useState } from "react";
import "../App.css";
import HeaderLogo from "../Images/HeaderLogo.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

export default function Header({sidebar, setSidebar}) {
  

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <header className="Header">
      <IconContext.Provider value={{ color: "#fff", size: '30px' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <img src={HeaderLogo} alt="Brandon Cox" onClick={showSidebar} />
          </Link>
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

      <div className="Renew">
        <Link to="/" title="Refresh">
          <AutorenewIcon style={{ fontSize: 50, color: "black" }} />
        </Link>
      </div>
    </IconContext.Provider>
    </header>
  );
}
