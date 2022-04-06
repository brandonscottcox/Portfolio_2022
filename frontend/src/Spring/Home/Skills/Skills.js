import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import data from "./SkillsData";
import styles from "./styles.module.css";
import "./Skills.css";
import { Link } from "react-scroll";

export default function Skills({ open, set }) {
  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "transparent" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "transparent" : "transparent",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.1,
  ]);

  return (
    <div className="SkillBoxFlex">
      <div className={styles.wrapper} onClick={() => set((open) => !open)}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={open ? styles.hidden : styles.container}
        >
          <div className={open ? "noText" : "text"}>
            <p className="SkillTitle">Skills</p>
          </div>
          {transition((style, item) => (
            <Link to="projects" smooth={true} offset={0} duration={500}>
              <animated.div
                className={styles.item}
                style={{ ...style, background: item.css }}
              />
              <div className={open ? "full" : "empty"}>
                <div className="columnText">{item.name}</div>
              </div>
            </Link>
          ))}
        </animated.div>
      </div>
    </div>
  );
}
