import React from "react";
import { useSpring, animated } from "react-spring";
import "../../Home/Home.css";
import ProfilePicture from "../../Images/SlackEditTrans3.png";

export default function Name() {
  const anim = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      delay: 2000,
      duration: 2000,
    },
  });

  return (
    <animated.h1 style={anim}>
      <img
        height="700"
        width="700"
        src={ProfilePicture}
      />
    </animated.h1>
  );
}
