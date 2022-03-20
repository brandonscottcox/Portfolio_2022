import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProfilePicture from "../../Images/BoulderMapEdit1.png";
import MapZoom from "../../Images/MapZoomTrans.png";


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



  return (
    <animated.h1 style={anim}>
        <img height="250" src={ProfilePicture} />
        <a
                href="https://www.google.com/maps/place/Boulder,+CO/@40.0293703,-105.2750826,13z/data=!3m1!4b1!4m5!3m4!1s0x876b8d4e278dafd3:0xc8393b7ca01b8058!8m2!3d40.0149856!4d-105.2705456"
                target="_blank"
              >
        <img className="mapZoom" height="100" src={MapZoom} />
        </a>
    </animated.h1>
  );
}





/*
OLD CSS BEFORE RESULTION CHANGE ISSUE




import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ProfilePicture from "../../Images/BoulderMapEdit1.png";
import MapZoom from "../../Images/MapZoomTrans.png";


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



  return (
    <animated.h1 style={anim}>
        <img height="450" src={ProfilePicture} />
        <a
                href="https://www.google.com/maps/place/Boulder,+CO/@40.0293703,-105.2750826,13z/data=!3m1!4b1!4m5!3m4!1s0x876b8d4e278dafd3:0xc8393b7ca01b8058!8m2!3d40.0149856!4d-105.2705456"
                target="_blank"
              >
        <img className="mapZoom" height="200" src={MapZoom} />
        </a>
    </animated.h1>
  );
}

*/