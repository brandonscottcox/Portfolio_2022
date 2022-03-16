import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../../Home/Home.css";
import ProfilePicture from "../../Images/BoulderMapEditTrans.png";

export default function ColoradoMap() {
  const anim = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 2000,
    },
  });

  const [picture, setPicture] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <animated.h1 style={anim}>
        <img height="450" src={ProfilePicture} />
    </animated.h1>
  );
}
