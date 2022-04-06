import React from "react";
import { useSpring, animated } from "react-spring";
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
      <div className="ProfileSize">
        <img src={ProfilePicture} />
        {/* <img height="425" width="425" src={ProfilePicture} /> */}
      </div>
    </animated.h1>
  );
}

/*
import React from "react";
import { useSpring, animated } from "react-spring";
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
*/
