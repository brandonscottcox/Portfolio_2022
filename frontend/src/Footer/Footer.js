import React from "react";
import "./Footer.css";
import Arrow from "../Images/UpArrowTrans.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="contact">
      <div className="arrow">
        <Link to="home" smooth={true} offset={0} duration={1000}>
          <img src={Arrow} />
        </Link>
      </div>
      <div>
        <p>Update 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
