import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../../App.css';

export default function Title() {
    const anim = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        },
        config: {
            delay: 2000,
            duration: 2000,
        }
    });

  return (
    <div>
        <animated.h1 style={anim}>
            <p className="WelcomeTitle">Frontend Developer</p>
        </animated.h1>
    </div>
  )
}
