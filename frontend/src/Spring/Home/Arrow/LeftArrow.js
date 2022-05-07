import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./styles.module.css";
import * as AiIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { MdHeight } from "react-icons/md";


/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

export default function App() {
  const color = useSpring({
    loop: true,
    to: [
      { opacity: 0, color: "rgb(255, 255, 255)" },
      { opacity: 1, color: "rgb(255, 255, 255)" },
    ],
    from: { opacity: 1, color: "rgb(255, 255, 255)" },
    config: { duration: 2000 },
  });
  return (
    <IconContext.Provider value={{ size: "2.5vw" }}>
    <animated.div style={color}>
      <AiIcons.IoIosArrowBack />
    </animated.div>
     </IconContext.Provider>

  );
}
