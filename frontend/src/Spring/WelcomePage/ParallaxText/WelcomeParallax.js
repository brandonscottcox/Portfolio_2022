import React from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import scroll from "../Gifs/scroll-down150.gif";
import { useSpring, animated } from "react-spring";
import Github from "../Images/Github125.png";
import Linkedin from "../Images/Linkdin100.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Test() {
  const anim = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      delay: 2000,
      duration: 10000,
    },
  });

  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <animated.h1 style={anim}>
            <div>
              <img src={scroll} />
            </div>
          </animated.h1>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <div>
              <h2>Welcome to my website,</h2>
              <p>
                I am a React Developer, with a series of web development skills.
              </p>
              <p>Scroll for more information</p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.5, end: 2 }}
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <div>
              <p>To learn more about me</p>
              <p>click here!</p>
              <div className={`${styles.HomeIcon}`}>
                <Link to="/home">
                  <HomeIcon style={{ fontSize: 50, color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 2.5, end: 3 }}
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <div>
              <p>Curious about my skills?</p>
              <div className={`${styles.HomeIcon}`}>
                <Link to="/about">
                  <InfoIcon style={{ fontSize: 50, color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3.5, end: 4 }}
          offset={3.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.light}`}>
            <div>
              <p>You can contact me here!</p>
              <div className={`${styles.HomeIcon}`}>
                <Link to="/contact">
                  <ContactMailIcon style={{ fontSize: 50, color: "white" }} />
                </Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5, end: 4 }}
          offset={4.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div
            className={`${styles.card} ${styles.parallax} ${styles.links} ${styles.ScrollImg}`}
          >
            <div className={`${styles.Github}`}>
              <a href="https://github.com/brandonscottcox" title="Github">
                <img src={Github} alt="Github" />
              </a>
            </div>
            <div className={`${styles.Linkdin}`}>
              <a
                href="https://www.linkedin.com/in/brandonscottcox/"
                title="Linkedin"
              >
                <img src={Linkedin} alt="Linkdin" />
              </a>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
